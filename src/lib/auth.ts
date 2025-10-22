import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from './prisma'
import type { User as PrismaUser } from '@prisma/client'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(user: PrismaUser): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export async function authenticateUser(email: string, password: string): Promise<PrismaUser | null> {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) return null

  const isValidPassword = await verifyPassword(password, user.password)
  if (!isValidPassword) return null

  return user
}

export async function createUser(
  email: string,
  password: string,
  name?: string,
  role: 'owner' | 'agent' = 'agent'
): Promise<PrismaUser> {
  const hashedPassword = await hashPassword(password)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role,
    },
  })

  return user
}