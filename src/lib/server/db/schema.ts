import { pgTable, varchar, pgEnum, timestamp, uuid } from 'drizzle-orm/pg-core';

export const rolesEnum = pgEnum('roles', ['user', 'admin']);

export const user = pgTable('users', {
	id: uuid('id').defaultRandom().primaryKey(),
	email: varchar('email', { length: 255 }).notNull().unique(),
	name: varchar('name', { length: 100 }).notNull(),
	password: varchar('password', { length: 255 }).notNull(),
	role: rolesEnum('role').default('user').notNull(),
	profilePicture: varchar('profile_picture', { length: 500 }),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});
