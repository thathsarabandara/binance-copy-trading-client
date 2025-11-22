import React, { useState } from 'react';
import { LifeBuoy, Search, Clock, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';
import type { SupportTicket } from '../../../types/admin';

const Support: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data
  const tickets: SupportTicket[] = [
    {
      id: '1',
      userId: '15',
      userName: 'Alex Thompson',
      userEmail: 'alex@example.com',
      subject: 'Unable to connect API',
      description: 'Getting error when trying to connect Binance API...',
      issueType: 'technical',
      priority: 'high',
      status: 'open',
      attachments: [],
      createdAt: '2024-01-21 10:30:00',
      updatedAt: '2024-01-21 10:30:00',
      responses: [],
    },
    {
      id: '2',
      userId: '22',
      userName: 'Maria Garcia',
      userEmail: 'maria@example.com',
      subject: 'Billing question about subscription',
      description: 'I was charged twice for my subscription this month...',
      issueType: 'billing',
      priority: 'medium',
      status: 'in_progress',
      assignedTo: 'Support Agent 1',
      attachments: [],
      createdAt: '2024-01-20 14:15:00',
      updatedAt: '2024-01-21 09:20:00',
      responses: [
        {
          id: '1',
          author: 'Support Agent 1',
          message: 'We are looking into this issue...',
          timestamp: '2024-01-21 09:20:00',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Support Tickets</h1>
          <p className="text-gray-600 mt-1">Manage user issues and complaints</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Priorities</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Open Tickets</span>
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24</h3>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">In Progress</span>
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600">18</h3>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Resolved Today</span>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">12</h3>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Urgent</span>
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-red-600">3</h3>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      ticket.priority === 'urgent'
                        ? 'bg-red-100'
                        : ticket.priority === 'high'
                        ? 'bg-orange-100'
                        : ticket.priority === 'medium'
                        ? 'bg-yellow-100'
                        : 'bg-blue-100'
                    }`}
                  >
                    <LifeBuoy
                      className={`w-6 h-6 ${
                        ticket.priority === 'urgent'
                          ? 'text-red-600'
                          : ticket.priority === 'high'
                          ? 'text-orange-600'
                          : ticket.priority === 'medium'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{ticket.subject}</h3>
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.priority === 'urgent'
                            ? 'bg-red-100 text-red-700'
                            : ticket.priority === 'high'
                            ? 'bg-orange-100 text-orange-700'
                            : ticket.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {ticket.priority}
                      </span>
                      <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium capitalize">
                        {ticket.issueType}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{ticket.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>
                        <strong>User:</strong> {ticket.userName} ({ticket.userEmail})
                      </span>
                      <span>•</span>
                      <span>
                        <strong>Created:</strong> {ticket.createdAt}
                      </span>
                      {ticket.assignedTo && (
                        <>
                          <span>•</span>
                          <span>
                            <strong>Assigned to:</strong> {ticket.assignedTo}
                          </span>
                        </>
                      )}
                    </div>
                    {ticket.responses.length > 0 && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Latest Response:</strong> {ticket.responses[0].message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          by {ticket.responses[0].author} at {ticket.responses[0].timestamp}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      ticket.status === 'open'
                        ? 'bg-yellow-100 text-yellow-700'
                        : ticket.status === 'in_progress'
                        ? 'bg-blue-100 text-blue-700'
                        : ticket.status === 'resolved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {ticket.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 pt-3 border-t border-gray-200">
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors text-sm font-medium">
                  View & Reply
                </button>
                {ticket.status === 'open' && (
                  <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">
                    Assign to Me
                  </button>
                )}
                {ticket.status === 'in_progress' && (
                  <button className="px-4 py-2 border border-green-500 text-green-600 hover:bg-green-50 rounded-lg transition-colors text-sm font-medium">
                    Mark as Resolved
                  </button>
                )}
                <button className="px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
                  Mark as Urgent
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4">
          <p className="text-sm text-gray-600">Showing 1 to 10 of 42 tickets</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              Previous
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
