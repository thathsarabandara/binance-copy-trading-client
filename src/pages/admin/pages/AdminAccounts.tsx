import React, { useState } from 'react';
import { Shield, Plus, Edit, Ban, CheckCircle } from 'lucide-react';
import type { AdminUser, AdminRole } from '../../../types/admin';

const AdminAccounts: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock data
  const adminRoles: AdminRole[] = [
    {
      role: 'super_admin',
      displayName: 'Super Admin',
      permissions: [
        'view_dashboard',
        'manage_traders',
        'manage_followers',
        'view_trades',
        'manage_payouts',
        'manage_api',
        'manage_kyc',
        'manage_subscriptions',
        'manage_support',
        'manage_settings',
        'manage_admins',
      ],
    },
    {
      role: 'finance_admin',
      displayName: 'Finance Admin',
      permissions: ['view_dashboard', 'view_trades', 'manage_payouts', 'manage_subscriptions'],
    },
    {
      role: 'support_admin',
      displayName: 'Support Admin',
      permissions: ['view_dashboard', 'manage_support', 'manage_kyc'],
    },
    {
      role: 'viewer_admin',
      displayName: 'Viewer Admin',
      permissions: ['view_dashboard', 'view_trades'],
    },
  ];

  const adminUsers: AdminUser[] = [
    {
      id: '1',
      name: 'John Admin',
      email: 'john@lktrader.com',
      role: 'super_admin',
      permissions: adminRoles[0].permissions,
      status: 'active',
      lastLogin: '2024-01-21 15:30:00',
      createdAt: '2023-01-15',
    },
    {
      id: '2',
      name: 'Sarah Finance',
      email: 'sarah@lktrader.com',
      role: 'finance_admin',
      permissions: adminRoles[1].permissions,
      status: 'active',
      lastLogin: '2024-01-21 10:15:00',
      createdAt: '2023-03-20',
    },
    {
      id: '3',
      name: 'Mike Support',
      email: 'mike@lktrader.com',
      role: 'support_admin',
      permissions: adminRoles[2].permissions,
      status: 'active',
      lastLogin: '2024-01-20 16:45:00',
      createdAt: '2023-06-10',
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'bg-red-100 text-red-700';
      case 'finance_admin':
        return 'bg-green-100 text-green-700';
      case 'support_admin':
        return 'bg-blue-100 text-blue-700';
      case 'viewer_admin':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Accounts & Roles</h1>
            <p className="text-gray-600 mt-1">Manage admin users with permission levels</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Admin
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Roles Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Admin Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminRoles.map((role) => (
              <div
                key={role.role}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{role.displayName}</h3>
                </div>
                <div className="space-y-2">
                  {role.permissions.slice(0, 3).map((perm, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">
                        {perm.replace(/_/g, ' ')}
                      </span>
                    </div>
                  ))}
                  {role.permissions.length > 3 && (
                    <p className="text-sm text-gray-500 mt-2">
                      +{role.permissions.length - 3} more permissions
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Admin Users</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Admin
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Role
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Permissions
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Last Login
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {adminUsers.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                          {admin.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{admin.name}</p>
                          <p className="text-sm text-gray-500">{admin.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
                          admin.role
                        )}`}
                      >
                        {adminRoles.find((r) => r.role === admin.role)?.displayName}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {admin.permissions.length} permissions
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{admin.lastLogin}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          admin.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {admin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Disable"
                        >
                          <Ban className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Permission Matrix */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Permission Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                    Permission
                  </th>
                  {adminRoles.map((role) => (
                    <th
                      key={role.role}
                      className="text-center px-4 py-3 text-sm font-semibold text-gray-700"
                    >
                      {role.displayName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  'view_dashboard',
                  'manage_traders',
                  'manage_followers',
                  'view_trades',
                  'manage_payouts',
                  'manage_api',
                  'manage_kyc',
                  'manage_subscriptions',
                  'manage_support',
                  'manage_settings',
                  'manage_admins',
                ].map((permission) => (
                  <tr key={permission} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 capitalize">
                      {permission.replace(/_/g, ' ')}
                    </td>
                    {adminRoles.map((role) => (
                      <td key={role.role} className="text-center px-4 py-3">
                        {role.permissions.includes(permission as any) ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Admin Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Admin</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter admin name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter admin email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  {adminRoles.map((role) => (
                    <option key={role.role} value={role.role}>
                      {role.displayName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors">
                  Create Admin
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-200 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAccounts;
