import React, { useState } from 'react';
import { 
  DollarSign, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  UploadCloud, 
  PieChart, 
  TrendingUp, 
  Download 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function Accountability() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'new' | 'details' | 'fix' | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOpenModal = (type: 'new' | 'details' | 'fix', item?: string) => {
    setModalType(type);
    if (item) setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAction = () => {
    if (modalType === 'new') {
      addToast('success', 'Nova prestação de contas iniciada.');
    } else if (modalType === 'fix') {
      addToast('success', 'Correções enviadas com sucesso.');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <DollarSign className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Prestação de Contas</h1>
          </div>
          <p className="text-slate-500">Gestão Financeira e Relatórios de Despesas</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/20"
            onClick={() => handleOpenModal('new')}
          >
            <UploadCloud className="w-4 h-4" />
            Nova Prestação de Contas
          </button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-emerald-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Orçamento Total</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">R$ 150.000</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Aprovado para 2023</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">Executado</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">R$ 65.400</span>
            <p className="text-sm font-medium text-slate-500 mt-1">43.6% do Total</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-amber-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PieChart className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Disponível</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">R$ 84.600</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Saldo Remanescente</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="border-b border-slate-200 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Histórico de Prestações
          </h2>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar por projeto, ID..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition-all shadow-sm" />
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
                <th className="p-4 pl-6">ID / Projeto</th>
                <th className="p-4">Data de Envio</th>
                <th className="p-4">Valor Solicitado</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-md">
                    <p className="font-semibold text-slate-900 truncate">PC-2023-112</p>
                    <p className="text-xs text-slate-500 mt-1 truncate" title="Desenvolvimento de Nanomateriais Sustentáveis">
                      Desenvolvimento de Nanomateriais Sustentáveis...
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900">15 Out, 2023</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900">R$ 12.500,00</p>
                  <p className="text-xs text-slate-500">Equipamentos</p>
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
                      title="Baixar Comprovantes"
                      onClick={() => addToast('info', 'Iniciando download dos comprovantes...')}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                      onClick={() => handleOpenModal('details', 'PC-2023-112')}
                    >
                      Detalhes
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-md">
                    <p className="font-semibold text-slate-900 truncate">PC-2023-089</p>
                    <p className="text-xs text-slate-500 mt-1 truncate" title="Análise de Microplásticos em Sistemas Hídricos">
                      Análise de Microplásticos em Sistemas Hídricos...
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900">02 Set, 2023</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900">R$ 4.200,00</p>
                  <p className="text-xs text-slate-500">Material de Consumo</p>
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
                      title="Baixar Comprovantes"
                      onClick={() => addToast('info', 'Iniciando download dos comprovantes...')}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                      onClick={() => handleOpenModal('details', 'PC-2023-089')}
                    >
                      Detalhes
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-md">
                    <p className="font-semibold text-slate-900 truncate">PC-2023-045</p>
                    <p className="text-xs text-slate-500 mt-1 truncate" title="Desenvolvimento de Sensores de Baixo Custo">
                      Desenvolvimento de Sensores de Baixo Custo...
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900">18 Ago, 2023</p>
                </td>
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900">R$ 8.900,00</p>
                  <p className="text-xs text-slate-500">Serviços de Terceiros</p>
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
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Baixar Comprovantes"
                      onClick={() => addToast('info', 'Iniciando download dos comprovantes...')}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                      onClick={() => handleOpenModal('fix', 'PC-2023-045')}
                    >
                      Corrigir
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600 bg-slate-50/50">
          <p>Mostrando 1 a 3 de 15 registros</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white disabled:opacity-50 transition-colors">Ant</button>
            <button className="px-3 py-1 bg-emerald-600 text-white rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors disabled:opacity-50">Próx</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          modalType === 'new' ? 'Nova Prestação de Contas' :
          modalType === 'details' ? `Detalhes: ${selectedItem}` :
          `Corrigir Prestação: ${selectedItem}`
        }
      >
        <div className="space-y-4">
          {modalType === 'new' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Projeto Relacionado</label>
                <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                  <option>Desenvolvimento de Nanomateriais</option>
                  <option>Análise de Microplásticos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Valor Solicitado (R$)</label>
                <input type="number" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="0,00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Comprovantes</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">Clique para fazer upload ou arraste os arquivos</p>
                  <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG até 5MB</p>
                </div>
              </div>
            </div>
          )}

          {modalType === 'details' && (
            <div className="space-y-4 text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-slate-500">Data de Envio</p>
                  <p>15 Out, 2023</p>
                </div>
                <div>
                  <p className="font-medium text-slate-500">Valor</p>
                  <p className="font-semibold">R$ 12.500,00</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-slate-500">Categoria</p>
                <p>Equipamentos</p>
              </div>
              <div>
                <p className="font-medium text-slate-500">Status</p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200 mt-1">
                  <Clock className="w-3.5 h-3.5" />
                  Em Análise
                </span>
              </div>
            </div>
          )}

          {modalType === 'fix' && (
            <div className="space-y-4">
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-sm text-rose-800">
                <strong>Motivo da Revisão:</strong> O comprovante fiscal anexado está ilegível. Por favor, envie uma nova cópia escaneada com melhor resolução.
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Novos Comprovantes</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">Clique para fazer upload ou arraste os arquivos</p>
                  <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG até 5MB</p>
                </div>
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
            {modalType !== 'details' && (
              <button
                onClick={handleAction}
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
              >
                {modalType === 'new' ? 'Enviar' : 'Enviar Correção'}
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
