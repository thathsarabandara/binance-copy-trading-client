import React, { useState } from 'react';
import {Search, Clock, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';
import type { SupportTicket } from '../../../types/admin';
import FollowrMarketPlaceStat from '../../../components/FollowrMarketPlaceStat';
import TicketCard from '../../../components/TicketCard';

const Support: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
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
          <FollowrMarketPlaceStat label='Open Tickets' value={"24"} color='yellow' icon={<Clock className="w-5 h-5 text-yellow-600" />}   />
          <FollowrMarketPlaceStat label='In Progress' value={"18"} color='blue' icon={<MessageSquare className="w-5 h-5 text-blue-600" />}   />
          <FollowrMarketPlaceStat label='Resolved Today' value={"12"} color='green' icon={<CheckCircle className="w-5 h-5 text-green-600" />}   />
          <FollowrMarketPlaceStat label='Urgent' value={"3"} color='red' icon={<AlertCircle className="w-5 h-5 text-red-600" />}   />
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <TicketCard
              title={ticket.subject}
              description={ticket.description}
              status={ticket.status}
              priority={ticket.priority}
              department={ticket.issueType}
              user={{ id: ticket.userId, name: ticket.userName, email: ticket.userEmail }}
              responses={ticket.responses}
              createdAt={ticket.createdAt}  
            />
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
