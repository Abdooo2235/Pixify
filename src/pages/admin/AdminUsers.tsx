import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [admins, setAdmins] = useState<Admin[]>([
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@pixify.com',
      role: 'Super Admin',
      status: 'active',
      lastLogin: '2 hours ago'
    },
    {
      id: '2',
      name: 'John Manager',
      email: 'john@pixify.com',
      role: 'Content Manager',
      status: 'active',
      lastLogin: '1 day ago'
    },
    {
      id: '3',
      name: 'Sarah Editor',
      email: 'sarah@pixify.com',
      role: 'Editor',
      status: 'inactive',
      lastLogin: '1 week ago'
    }
  ]);

  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    role: 'Editor'
  });

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddAdmin = () => {
    if (newAdmin.name && newAdmin.email) {
      const admin: Admin = {
        id: Date.now().toString(),
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
        status: 'active',
        lastLogin: 'Never'
      };
      setAdmins([...admins, admin]);
      setNewAdmin({ name: '', email: '', role: 'Editor' });
    }
  };

  const handleDeleteAdmin = (id: string) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  const toggleAdminStatus = (id: string) => {
    setAdmins(admins.map(admin =>
      admin.id === id
        ? { ...admin, status: admin.status === 'active' ? 'inactive' : 'active' }
        : admin
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Admins</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Add, edit, and manage administrator accounts
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Admin
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-slate-800">
            <DialogHeader>
              <DialogTitle className="text-slate-900 dark:text-white">Add New Admin</DialogTitle>
              <DialogDescription className="text-slate-600 dark:text-slate-300">
                Create a new administrator account
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-900 dark:text-white">Name</label>
                <Input
                  value={newAdmin.name}
                  onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                  placeholder="Enter admin name"
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900 dark:text-white">Email</label>
                <Input
                  type="email"
                  value={newAdmin.email}
                  onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                  placeholder="Enter email address"
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-900 dark:text-white">Role</label>
                <select
                  value={newAdmin.role}
                  onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="Editor">Editor</option>
                  <option value="Content Manager">Content Manager</option>
                  <option value="Super Admin">Super Admin</option>
                </select>
              </div>
              <Button onClick={handleAddAdmin} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Add Admin
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white">Admin Users</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Manage administrator accounts and permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search admins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAdmins.map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell className="font-medium">{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>{admin.role}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={admin.status === 'active' ? 'default' : 'secondary'}
                      className={admin.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    >
                      {admin.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{admin.lastLogin}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleAdminStatus(admin.id)}
                        className="h-8 w-8"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteAdmin(admin.id)}
                        className="h-8 w-8 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;