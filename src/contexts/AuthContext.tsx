import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  adminUser: AdminUser | null;
}

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@pixify.com',
  password: 'admin123'
};

const MOCK_ADMIN_USER: AdminUser = {
  id: '1',
  email: 'admin@pixify.com',
  name: 'Admin User',
  role: 'Super Admin'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    // Check localStorage for existing session
    const savedAuth = localStorage.getItem('pixify_admin_auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAdmin(true);
      setAdminUser(authData.user);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAdmin(true);
      setAdminUser(MOCK_ADMIN_USER);
      localStorage.setItem('pixify_admin_auth', JSON.stringify({ user: MOCK_ADMIN_USER }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setAdminUser(null);
    localStorage.removeItem('pixify_admin_auth');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, adminUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};