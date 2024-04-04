/**
 * Firebase types, used in the database service
 * 
 * 
 */



/**
 * Firestore document types
 * 
 * 
 */

/**
 * User document type
 * 
 * @param uid - The user's unique identifier
 * @param displayName - The user's display name
 * @param email - The user's email address
 * @param roles - The user's roles and permissions
 * @param firstLogin - The date of the user's first login
 * @param lastLogin - The date of the user's last login
 * 
 * 
 */

export interface UserDoc {
    uid: string;
    displayName: string;
    email: string;
    isAnonymous: boolean;
    isAdmin: boolean;
    createdAt: string;
  }
  
export type IFirestore = {
  'users': Record<string, UserDoc>;
}
export type Coll = keyof IFirestore;
export type Doc = UserDoc;    