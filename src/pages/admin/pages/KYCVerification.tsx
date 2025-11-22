import React, { useState } from 'react';
import { FileCheck, Search, CheckCircle, XCircle, Eye, Clock } from 'lucide-react';
import type { KYCDocument } from '../../../types/admin';
import FollowrMarketPlaceStat from '../../../components/FollowrMarketPlaceStat';
import { Table } from '../../../components/Table';

const KYCVerification: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<KYCDocument | null>(null);
  const [showModal, setShowModal] = useState(false);
  const documents: KYCDocument[] = [
    {
      id: '1',
      userId: '15',
      userName: 'Alex Thompson',
      userEmail: 'alex@example.com',
      documentType: 'passport',
      documentNumber: 'P12345678',
      documentImages: ['/docs/passport-front.jpg', '/docs/passport-back.jpg'],
      selfieImage: '/docs/selfie.jpg',
      submittedAt: '2024-01-20 14:30:00',
      status: 'pending',
    },
    {
      id: '2',
      userId: '22',
      userName: 'Maria Garcia',
      userEmail: 'maria@example.com',
      documentType: 'id_card',
      documentNumber: 'ID987654321',
      documentImages: ['/docs/id-front.jpg', '/docs/id-back.jpg'],
      selfieImage: '/docs/selfie2.jpg',
      submittedAt: '2024-01-19 10:15:00',
      status: 'approved',
      reviewedBy: 'Admin User',
      reviewedAt: '2024-01-19 15:45:00',
    },
  ];

  const handleApprove = (docId: string) => {
    console.log('Approve KYC:', docId);
  };

  const handleReject = (docId: string) => {
    console.log('Reject KYC:', docId);
  };

  const handleViewDetails = (doc: KYCDocument) => {
    setSelectedDocument(doc);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">KYC Verification</h1>
          <p className="text-gray-600 mt-1">Review and verify user identity documents</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or document number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <FollowrMarketPlaceStat label='Pending Review' value={"12"} color='yellow' icon={<Clock className="w-5 h-5 text-yellow-600" />}   />
          <FollowrMarketPlaceStat label='Approved' value={"156"} color='green' icon={<CheckCircle className="w-5 h-5 text-green-600" />}   />
          <FollowrMarketPlaceStat label='Rejected' value={"8"} color='red' icon={<XCircle className="w-5 h-5 text-red-600" />}   />
          <FollowrMarketPlaceStat label='Total Submissions' value={"176"} color='gray' icon={<FileCheck className="w-5 h-5 text-yellow-600" />}   />
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table
                columns={[
                  {
                    key: 'user',
                    header: 'User',
                    render: (row: KYCDocument) => (
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{row.userName}</span> 
                        <span className="text-sm text-gray-500">{row.userEmail}</span>
                      </div>
                    ),
                  },
                  {
                    key: 'documentType',
                    header: 'Document Type',
                    render: (row: KYCDocument) => (
                      <span className="text-sm text-gray-900 capitalize">
                        {row.documentType.replace('_', ' ')}
                      </span>
                    ),
                  },
                  {
                    key: 'documentNumber',
                    header: 'Document Number',
                    render: (row: KYCDocument) => (
                      <code className="text-sm font-mono text-gray-900">
                        {row.documentNumber}
                      </code>
                    ),
                  },
                  {
                    key: 'submittedAt',
                    header: 'Submitted',
                    render: (row: KYCDocument) => (
                      <span className="text-sm text-gray-600">{row.submittedAt}</span>
                    ),
                  },
                  {
                    key: 'status',
                    header: 'Status',
                    render: (row: KYCDocument) => (
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          row.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : row.status === 'approved'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {row.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                        {row.status === 'rejected' && <XCircle className="w-3 h-3" />}
                        {row.status === 'pending' && <Clock className="w-3 h-3" />}
                        {row.status}
                      </span>
                    ),
                  },
                  {
                    key: 'actions',
                    header: 'Actions',
                    render: (row: KYCDocument) => (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewDetails(row)}
                          className="px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                        {row.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(row.id)}
                              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-1"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(row.id)}
                              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-1"
                            >
                              <XCircle className="w-4 h-4" />
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    ),
                  },
                ]}
                data={documents}
              />
          </div>
        </div>
      </div>

      {/* View Document Modal */}
      {showModal && selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">KYC Document Review</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XCircle className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Information</h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <label className="text-sm text-gray-600">Name</label>
                    <p className="font-medium text-gray-900">{selectedDocument.userName}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="font-medium text-gray-900">{selectedDocument.userEmail}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Document Type</label>
                    <p className="font-medium text-gray-900 capitalize">
                      {selectedDocument.documentType.replace('_', ' ')}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Document Number</label>
                    <p className="font-medium text-gray-900">{selectedDocument.documentNumber}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Images</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedDocument.documentImages.map((_, idx) => (
                    <div
                      key={idx}
                      className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <FileCheck className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Document Image {idx + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedDocument.selfieImage && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Selfie Verification</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center max-w-md">
                    <div className="text-center">
                      <FileCheck className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Selfie Image</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedDocument.status === 'pending' && (
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => handleApprove(selectedDocument.id)}
                    className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Approve KYC
                  </button>
                  <button
                    onClick={() => handleReject(selectedDocument.id)}
                    className="flex-1 px-6 py-3 border border-red-500 text-red-600 hover:bg-red-50 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-5 h-5" />
                    Reject KYC
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KYCVerification;
