import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  User,
  FileText,
  GraduationCap
} from 'lucide-react';
import Modal from '../components/Modal';
import { useToast } from '../components/ToastContext';

export default function AdminValidation() {
  const [activeTab, setActiveTab] = useState('researchers');
  const { addToast } = useToast();
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const [requests, setRequests] = useState([
    { id: '1', name: 'João Silva', cpf: '123.***.***-00', initials: 'JS', type: 'Novo Cadastro', category: 'Pesquisador Externo', date: '24 Out, 2023', time: '10:30', status: 'Revisão Pendente', priority: 'Alta', color: 'blue' },
    { id: '2', name: 'Maria Oliveira', cpf: '987.***.***-00', initials: 'MO', type: 'Atualização de Perfil', category: 'Pesquisador Interno', date: '23 Out, 2023', time: '14:15', status: 'Revisão Pendente', priority: 'Normal', color: 'purple' }
  ]);

  const handleApprove = () => {
    setRequests(prev => prev.filter(r => r.id !== selectedRequest.id));
    addToast(`Solicitação de ${selectedRequest.name} aprovada com sucesso!`, 'success');
    setSelectedRequest(null);
  };

  const handleReject = () => {
    setRequests(prev => prev.filter(r => r.id !== selectedRequest.id));
    addToast(`Solicitação de ${selectedRequest.name} rejeitada.`, 'error');
    setSelectedRequest(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Portal Gerencial</h1>
          </div>
          <p className="text-slate-500">Painel de Validação ESPDF / CPECC</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold text-slate-900">Usuário Admin</p>
            <p className="text-sm text-slate-500">Coordenador CPECC</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center">
            <span className="font-bold text-slate-600">AD</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-amber-400 transition-colors cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Validação Pendente</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">{requests.length}</span>
              <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">+{requests.length} hoje</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Clock className="w-7 h-7" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-emerald-400 transition-colors cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Aprovados na semana</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">142</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-rose-400 transition-colors cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Rejeitados / Revisões</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">12</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <XCircle className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Tabs & Controls */}
        <div className="border-b border-slate-200 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('researchers')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'researchers' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <User className="w-4 h-4" />
              Pesquisadores
              <span className="bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full text-xs">{requests.length}</span>
            </button>
            <button 
              onClick={() => { setActiveTab('projects'); addToast('Filtro aplicado: Projetos', 'info'); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'projects' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <FileText className="w-4 h-4" />
              Projetos
              <span className="bg-slate-200 text-slate-700 py-0.5 px-2 rounded-full text-xs">8</span>
            </button>
            <button 
              onClick={() => { setActiveTab('picite'); addToast('Filtro aplicado: PICITE', 'info'); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'picite' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <GraduationCap className="w-4 h-4" />
              PICITE
              <span className="bg-slate-200 text-slate-700 py-0.5 px-2 rounded-full text-xs">4</span>
            </button>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar por nome, CPF..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-sm" />
            </div>
            <button className="p-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Filtrar</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="p-4 pl-6">Solicitante</th>
                <th className="p-4">Tipo / Categoria</th>
                <th className="p-4">Data de Submissão</th>
                <th className="p-4">Status</th>
                <th className="p-4">Prioridade</th>
                <th className="p-4 pr-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">Nenhuma solicitação pendente no momento.</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-${req.color}-100 text-${req.color}-700 flex items-center justify-center font-bold text-sm`}>
                          {req.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{req.name}</p>
                          <p className="text-xs text-slate-500">CPF: {req.cpf}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-slate-900">{req.type}</p>
                      <p className="text-xs text-slate-500">{req.category}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-slate-900">{req.date}</p>
                      <p className="text-xs text-slate-500">{req.time}</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                        <Clock className="w-3.5 h-3.5" />
                        {req.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${req.priority === 'Alta' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>
                        {req.priority}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <button 
                        onClick={() => setSelectedRequest(req)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Revisar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
          <p>Mostrando {requests.length} registros</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Ant</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Próx</button>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <Modal isOpen={!!selectedRequest} onClose={() => setSelectedRequest(null)} title="Revisar Solicitação">
        {selectedRequest && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className={`w-12 h-12 rounded-full bg-${selectedRequest.color}-100 text-${selectedRequest.color}-700 flex items-center justify-center font-bold text-lg`}>
                {selectedRequest.initials}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{selectedRequest.name}</h4>
                <p className="text-sm text-slate-500">{selectedRequest.category} • {selectedRequest.cpf}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Detalhes da Solicitação</h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Tipo</p>
                  <p className="font-medium text-slate-900">{selectedRequest.type}</p>
                </div>
                <div>
                  <p className="text-slate-500">Data de Submissão</p>
                  <p className="font-medium text-slate-900">{selectedRequest.date} às {selectedRequest.time}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Comentários do Avaliador (Opcional)</label>
              <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none" rows={3} placeholder="Adicione observações sobre a aprovação ou motivo da rejeição..."></textarea>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <button 
                onClick={handleReject}
                className="flex-1 px-4 py-2 border border-rose-200 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl font-medium transition-colors"
              >
                Rejeitar
              </button>
              <button 
                onClick={handleApprove}
                className="flex-1 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-medium transition-colors shadow-sm shadow-blue-600/20"
              >
                Aprovar
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
