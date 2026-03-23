import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Users, 
  Calendar, 
  ChevronRight, 
  MoreVertical, 
  PlusCircle, 
  UploadCloud, 
  Settings 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function ProjectManagement() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'new' | 'report' | 'settings' | null>(null);

  const handleOpenModal = (type: 'new' | 'report' | 'settings') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleAction = () => {
    if (modalType === 'new') {
      addToast('success', 'Novo projeto criado com sucesso!');
    } else if (modalType === 'report') {
      addToast('success', 'Relatório enviado para análise.');
    } else if (modalType === 'settings') {
      addToast('success', 'Configurações do projeto atualizadas.');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Hub do Pesquisador</h1>
          </div>
          <p className="text-slate-500">Gestão e Execução de Projetos</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            onClick={() => handleOpenModal('new')}
          >
            <PlusCircle className="w-4 h-4" />
            Novo Projeto
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-teal-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-1 rounded-full">Ativos</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">4</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Projetos em Andamento</p>
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
            <span className="text-3xl font-bold text-slate-900">2</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Relatórios Próximos</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-purple-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">12</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Membros da Equipe</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-emerald-400 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Concluídos</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-slate-900">8</span>
            <p className="text-sm font-medium text-slate-500 mt-1">Projetos Finalizados</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Projetos Ativos</h2>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Buscar..." className="pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none text-sm w-48 transition-all shadow-sm" />
            </div>
            <button 
              className="p-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm transition-all bg-slate-50"
              onClick={() => addToast('info', 'Filtros avançados em desenvolvimento')}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-teal-300 transition-all group">
          <div className="p-6 border-b border-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                    FAPESP
                  </span>
                  <span className="text-xs font-medium text-slate-500">ID: PRJ-2023-045</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Desenvolvimento de Nanomateriais Sustentáveis para Purificação de Água
                </h3>
                <p className="text-sm text-slate-500 mt-2 line-clamp-2 max-w-3xl">
                  Este projeto visa sintetizar e caracterizar novos nanomateriais à base de carbono derivados de resíduos agrícolas para serem usados como adsorventes altamente eficientes para metais pesados e contaminantes emergentes em sistemas hídricos urbanos.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button 
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  onClick={() => handleOpenModal('settings')}
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  onClick={() => addToast('info', 'Opções adicionais')}
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Cronograma</p>
                  <p className="text-sm font-semibold text-slate-900">Jan '23 - Dez '25</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Equipe</p>
                  <p className="text-sm font-semibold text-slate-900">5 Membros</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Próximo Marco</p>
                  <p className="text-sm font-semibold text-slate-900">15 Nov, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Status</p>
                  <p className="text-sm font-semibold text-slate-900">No Prazo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Progresso Geral</span>
                <span className="text-sm font-bold text-teal-700">45%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
              <button 
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                onClick={() => handleOpenModal('report')}
              >
                <UploadCloud className="w-4 h-4" />
                Enviar Relatório
              </button>
              <button 
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-all shadow-sm shadow-teal-600/20"
                onClick={() => addToast('info', 'Acessando painel do projeto...')}
              >
                Gerenciar Projeto
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          modalType === 'new' ? 'Novo Projeto' :
          modalType === 'report' ? 'Enviar Relatório' :
          'Configurações do Projeto'
        }
      >
        <div className="space-y-4">
          {modalType === 'new' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Projeto</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" placeholder="Ex: Pesquisa em Nanotecnologia" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Agência de Fomento</label>
                <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none">
                  <option>FAPESP</option>
                  <option>CNPq</option>
                  <option>CAPES</option>
                  <option>Outra</option>
                </select>
              </div>
            </div>
          )}

          {modalType === 'report' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">Envie o relatório parcial ou final do projeto "Desenvolvimento de Nanomateriais".</p>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Clique para fazer upload ou arraste o arquivo</p>
                <p className="text-xs text-slate-500 mt-1">PDF, DOCX até 10MB</p>
              </div>
            </div>
          )}

          {modalType === 'settings' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">Ajuste as configurações e permissões deste projeto.</p>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <p className="text-sm font-medium text-slate-900">Notificações por Email</p>
                  <p className="text-xs text-slate-500">Receber alertas de prazos</p>
                </div>
                <div className="w-10 h-5 bg-teal-600 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleAction}
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg"
            >
              Confirmar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
