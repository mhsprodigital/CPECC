import React, { useState } from 'react';
import { 
  CheckSquare, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Download, 
  MessageSquare 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function Evaluation() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleEvaluate = (project: string) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSubmitEvaluation = () => {
    addToast('success', 'Avaliação enviada com sucesso!');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <CheckSquare className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Portal de Avaliação</h1>
          </div>
          <p className="text-slate-500">Painel do Avaliador Técnico e Científico</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold text-slate-900">Dr. Carlos Mendes</p>
            <p className="text-sm text-slate-500">Comitê Científico</p>
          </div>
          <img src="https://i.pravatar.cc/150?img=11" alt="Perfil" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-amber-400 transition-colors cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Avaliações Pendentes</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">5</span>
              <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">2 Urgentes</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <AlertCircle className="w-7 h-7" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-blue-400 transition-colors cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Em Andamento</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">3</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Clock className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-emerald-400 transition-colors cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Concluídas (Este Mês)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">12</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="border-b border-slate-200 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Minhas Atribuições
          </h2>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar projetos..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none text-sm transition-all shadow-sm" />
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
                <th className="p-4 pl-6">Título do Projeto</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Prazo</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-md">
                    <p className="font-semibold text-slate-900 truncate" title="Análise de Microplásticos em Sistemas Hídricos Urbanos">
                      Análise de Microplásticos em Sistemas Hídricos Urbanos
                    </p>
                    <p className="text-xs text-slate-500 mt-1">ID: PRJ-2023-089 • Autor: Dra. Ana Costa</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    Artigo Científico
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-rose-600 font-medium text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Amanhã</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">26 Out, 2023</p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                    <Clock className="w-3.5 h-3.5" />
                    Revisão Pendente
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" 
                      title="Baixar Documentos"
                      onClick={() => addToast('info', 'Iniciando download dos documentos...')}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-600/20"
                      onClick={() => handleEvaluate('Análise de Microplásticos em Sistemas Hídricos Urbanos')}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Avaliar
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="max-w-md">
                    <p className="font-semibold text-slate-900 truncate" title="Desenvolvimento de Sensores de Baixo Custo para Agricultura">
                      Desenvolvimento de Sensores de Baixo Custo para Agricultura
                    </p>
                    <p className="text-xs text-slate-500 mt-1">ID: PRJ-2023-102 • Autor: Prof. Roberto Almeida</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Fomento à Pesquisa
                  </span>
                </td>
                <td className="p-4">
                  <div className="text-slate-900 font-medium text-sm">
                    <span>Em 5 dias</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">30 Out, 2023</p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    <FileText className="w-3.5 h-3.5" />
                    Rascunho Salvo
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" 
                      title="Baixar Documentos"
                      onClick={() => addToast('info', 'Iniciando download dos documentos...')}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm"
                      onClick={() => handleEvaluate('Desenvolvimento de Sensores de Baixo Custo para Agricultura')}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Continuar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600 bg-slate-50/50">
          <p>Mostrando 1 a 2 de 2 registros</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white disabled:opacity-50 transition-colors" disabled>Ant</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors disabled:opacity-50" disabled>Próx</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Avaliação de Projeto"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 font-medium">Projeto: {selectedProject}</p>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Parecer Técnico</label>
            <textarea 
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none min-h-[120px]" 
              placeholder="Descreva sua avaliação detalhada aqui..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Decisão</label>
            <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
              <option value="">Selecione um parecer...</option>
              <option value="approved">Aprovado</option>
              <option value="approved_with_changes">Aprovado com Ressalvas</option>
              <option value="rejected">Reprovado</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmitEvaluation}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            >
              Enviar Avaliação
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
