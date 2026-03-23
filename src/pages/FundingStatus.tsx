import React, { useState } from 'react';
import { 
  Banknote, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Download, 
  Eye,
  XCircle
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function FundingStatus() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'details' | 'issues' | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOpenModal = (type: 'details' | 'issues', item: string) => {
    setModalType(type);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Banknote className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Status de Fomentos</h1>
          </div>
          <p className="text-slate-500">Acompanhamento das suas solicitações de auxílio financeiro</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-emerald-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">3</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Aprovados</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-amber-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">2</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Em Análise</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-rose-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <XCircle className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">0</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Rejeitados</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Banknote className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold text-slate-900">R$ 24.5k</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Total Captado</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="border-b border-slate-200 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Histórico de Solicitações
          </h2>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar por título, ID..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition-all shadow-sm" />
            </div>
            <button 
              className="p-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-white hover:shadow-sm transition-all flex items-center gap-2 bg-slate-50"
              onClick={() => addToast('info', 'Filtros avançados em desenvolvimento')}
            >
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Filtrar</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="p-4 pl-6">ID / Título</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Data Solicitação</th>
                <th className="p-4">Valor</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-xs">
                    <p className="font-semibold text-slate-900 truncate" title="Aquisição de Reagentes para Fase 2">
                      Aquisição de Reagentes para Fase 2
                    </p>
                    <p className="text-xs text-slate-500 mt-1">FOM-2023-145 • PRJ-2023-045</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    Material de Consumo
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900">24 Out, 2023</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900">R$ 4.200,00</p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                    <Clock className="w-3.5 h-3.5" />
                    Em Análise
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Ver Detalhes"
                      onClick={() => handleOpenModal('details', 'FOM-2023-145')}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-xs">
                    <p className="font-semibold text-slate-900 truncate" title="Participação no Congresso Internacional de Nanotecnologia">
                      Participação no Congresso Internacional...
                    </p>
                    <p className="text-xs text-slate-500 mt-1">FOM-2023-112 • PRJ-2023-045</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    Auxílio Viagem
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900">15 Set, 2023</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900">R$ 8.500,00</p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Aprovado
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Baixar Termo de Outorga"
                      onClick={() => addToast('info', 'Iniciando download do Termo de Outorga...')}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Ver Detalhes"
                      onClick={() => handleOpenModal('details', 'FOM-2023-112')}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-xs">
                    <p className="font-semibold text-slate-900 truncate" title="Taxa de Publicação - Journal of Environmental Sciences">
                      Taxa de Publicação - Journal of Env...
                    </p>
                    <p className="text-xs text-slate-500 mt-1">FOM-2023-089 • PRJ-2023-089</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    Taxa de Publicação
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900">10 Ago, 2023</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900">R$ 12.000,00</p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 border border-rose-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Revisão Necessária
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                      onClick={() => handleOpenModal('issues', 'FOM-2023-089')}
                    >
                      Ver Pendências
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600 bg-slate-50/50">
          <p>Mostrando 1 a 3 de 5 registros</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white disabled:opacity-50 transition-colors">Ant</button>
            <button className="px-3 py-1 bg-emerald-600 text-white rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors disabled:opacity-50">Próx</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          modalType === 'details' ? `Detalhes da Solicitação: ${selectedItem}` :
          `Pendências: ${selectedItem}`
        }
      >
        <div className="space-y-4">
          {modalType === 'details' && (
            <div className="space-y-4 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-slate-500">Data de Solicitação</p>
                  <p>24 Out, 2023</p>
                </div>
                <div>
                  <p className="font-medium text-slate-500">Valor Solicitado</p>
                  <p className="font-semibold">R$ 4.200,00</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-slate-500">Tipo de Auxílio</p>
                <p>Material de Consumo</p>
              </div>
              <div>
                <p className="font-medium text-slate-500">Justificativa</p>
                <p className="mt-1">Aquisição de reagentes específicos para a fase 2 do projeto, essenciais para a realização dos testes in vitro conforme cronograma aprovado.</p>
              </div>
            </div>
          )}

          {modalType === 'issues' && (
            <div className="space-y-4">
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-sm text-rose-800">
                <strong>Pendência:</strong> O orçamento do fornecedor 2 está ilegível. Por favor, anexe uma nova cópia.
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Anexar Novo Documento</label>
                <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              {modalType === 'details' ? 'Fechar' : 'Cancelar'}
            </button>
            {modalType === 'issues' && (
              <button
                onClick={() => {
                  addToast('success', 'Documentos enviados para reanálise.');
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
              >
                Enviar Correção
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
