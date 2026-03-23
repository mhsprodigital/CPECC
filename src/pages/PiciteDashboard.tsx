import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Search, 
  Filter, 
  Download, 
  Eye 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function PiciteDashboard() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const handleOpenModal = (student: string) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard PICITE</h1>
          </div>
          <p className="text-slate-500">Visão Geral do Programa de Iniciação Científica</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            onClick={() => addToast('info', 'Gerando relatório PICITE...')}
          >
            <Download className="w-4 h-4" />
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-purple-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded-full">Edital Atual</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">42</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Alunos Ativos</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">18</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Orientadores</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-amber-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Pendentes</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">7</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Relatórios Atrasados</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-emerald-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">85%</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Taxa de Conclusão</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="border-b border-slate-200 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Acompanhamento de Alunos
          </h2>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar aluno, orientador..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none text-sm transition-all shadow-sm" />
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
                <th className="p-4 pl-6">Aluno / Curso</th>
                <th className="p-4">Orientador</th>
                <th className="p-4">Projeto</th>
                <th className="p-4">Status Relatório</th>
                <th className="p-4 pr-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                      LM
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Lucas Martins</p>
                      <p className="text-xs text-slate-500">Medicina</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-medium text-slate-900">Dr. Carlos Mendes</p>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900 truncate max-w-[200px]" title="Avaliação da eficácia de novos protocolos...">
                    Avaliação da eficácia de novos protocolos...
                  </p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Em Dia
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <button 
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                    onClick={() => handleOpenModal('Lucas Martins')}
                  >
                    <Eye className="w-4 h-4" />
                    Ver
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      AF
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Aline Fernandes</p>
                      <p className="text-xs text-slate-500">Biomedicina</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-medium text-slate-900">Dra. Ana Costa</p>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900 truncate max-w-[200px]" title="Marcadores biomoleculares na detecção precoce...">
                    Marcadores biomoleculares na detecção precoce...
                  </p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 border border-rose-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Atrasado
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <button 
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                    onClick={() => handleOpenModal('Aline Fernandes')}
                  >
                    <Eye className="w-4 h-4" />
                    Ver
                  </button>
                </td>
              </tr>
              
              {/* Row 3 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      RS
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Rafael Silva</p>
                      <p className="text-xs text-slate-500">Enfermagem</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-medium text-slate-900">Prof. Roberto Almeida</p>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-900 truncate max-w-[200px]" title="Impacto do acolhimento na recuperação...">
                    Impacto do acolhimento na recuperação...
                  </p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                    <Clock className="w-3.5 h-3.5" />
                    Pendente Avaliação
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <button 
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                    onClick={() => handleOpenModal('Rafael Silva')}
                  >
                    <Eye className="w-4 h-4" />
                    Ver
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600 bg-slate-50/50">
          <p>Mostrando 1 a 3 de 42 registros</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white disabled:opacity-50 transition-colors">Ant</button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-white transition-colors disabled:opacity-50">Próx</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Detalhes do Aluno: ${selectedStudent}`}
      >
        <div className="space-y-4 text-sm text-slate-700">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-slate-500">Curso</p>
              <p>Medicina</p>
            </div>
            <div>
              <p className="font-medium text-slate-500">Semestre</p>
              <p>5º Semestre</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-slate-500">Orientador</p>
            <p>Dr. Carlos Mendes</p>
          </div>
          <div>
            <p className="font-medium text-slate-500">Projeto Vinculado</p>
            <p>Avaliação da eficácia de novos protocolos de tratamento...</p>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <h4 className="font-medium text-slate-900 mb-2">Histórico de Relatórios</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200">
                <span>Relatório Parcial 1</span>
                <span className="text-emerald-600 font-medium text-xs flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Entregue</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200">
                <span>Relatório Final</span>
                <span className="text-amber-600 font-medium text-xs flex items-center gap-1"><Clock className="w-3 h-3"/> Pendente</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Fechar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
