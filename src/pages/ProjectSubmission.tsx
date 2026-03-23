import React, { useState } from 'react';
import { 
  FileText, 
  Banknote, 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  Edit3, 
  Trash2 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function ProjectSubmission() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'start' | 'delete' | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleStartSubmission = (type: string) => {
    setSelectedItem(type);
    setModalType('start');
    setIsModalOpen(true);
  };

  const handleDeleteDraft = (title: string) => {
    setSelectedItem(title);
    setModalType('delete');
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    if (modalType === 'start') {
      addToast('success', `Iniciando submissão para: ${selectedItem}`);
    } else if (modalType === 'delete') {
      addToast('success', `Rascunho excluído: ${selectedItem}`);
    }
    setIsModalOpen(false);
    setModalType(null);
    setSelectedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Portal de Submissão de Projetos</h1>
        <p className="text-slate-500 mt-2">Selecione o tipo de submissão que deseja iniciar</p>
      </div>

      {/* Submission Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Scientific Articles */}
        <div 
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-blue-300 transition-all group cursor-pointer relative overflow-hidden"
          onClick={() => handleStartSubmission('Artigos Científicos')}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
            <FileText className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Artigos Científicos</h2>
          <p className="text-sm text-slate-500 mb-6 line-clamp-2">
            Submeta seus artigos de pesquisa para revisão institucional e aprovação de publicação.
          </p>
          <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
            Iniciar Submissão <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Research Funding */}
        <div 
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-emerald-300 transition-all group cursor-pointer relative overflow-hidden"
          onClick={() => handleStartSubmission('Fomento à Pesquisa')}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
            <Banknote className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Fomento à Pesquisa</h2>
          <p className="text-sm text-slate-500 mb-6 line-clamp-2">
            Solicite auxílios internos, apoio para viagens ou endosso para financiamento externo.
          </p>
          <button className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
            Iniciar Submissão <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* PICITE */}
        <div 
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-purple-300 transition-all group cursor-pointer relative overflow-hidden"
          onClick={() => handleStartSubmission('Programa PICITE')}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Programa PICITE</h2>
          <p className="text-sm text-slate-500 mb-6 line-clamp-2">
            Cadastre novos projetos de iniciação científica e orientações de alunos.
          </p>
          <button className="flex items-center gap-2 text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
            Iniciar Submissão <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Drafts Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-bold text-slate-900">Meus Rascunhos</h2>
          </div>
          <span className="bg-slate-200 text-slate-700 py-0.5 px-2.5 rounded-full text-xs font-bold">2 Salvos</span>
        </div>
        
        <div className="divide-y divide-slate-100">
          {/* Draft Item */}
          <div className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Impacto do Aprendizado de Máquina em Modelos Climáticos</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-500">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    Artigo Científico
                  </span>
                  <span>Última edição: 24 Out, 2023 - 14:30</span>
                  <span className="flex items-center gap-1 text-amber-600 font-medium">
                    <Clock className="w-3.5 h-3.5" /> Etapa 2 de 4
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button 
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" 
                title="Excluir Rascunho"
                onClick={() => handleDeleteDraft('Impacto do Aprendizado de Máquina em Modelos Climáticos')}
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                onClick={() => addToast('info', 'Continuando edição do rascunho...')}
              >
                <Edit3 className="w-4 h-4" />
                Continuar
              </button>
            </div>
          </div>

          {/* Draft Item */}
          <div className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                <Banknote className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Auxílio Equipamento: Sequenciador de Nova Geração</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-500">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    Fomento à Pesquisa
                  </span>
                  <span>Última edição: 20 Out, 2023 - 09:15</span>
                  <span className="flex items-center gap-1 text-amber-600 font-medium">
                    <Clock className="w-3.5 h-3.5" /> Etapa 1 de 3
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button 
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" 
                title="Excluir Rascunho"
                onClick={() => handleDeleteDraft('Auxílio Equipamento: Sequenciador de Nova Geração')}
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                onClick={() => addToast('info', 'Continuando edição do rascunho...')}
              >
                <Edit3 className="w-4 h-4" />
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'start' ? 'Iniciar Nova Submissão' : 'Excluir Rascunho'}
      >
        <div className="space-y-4">
          <p className="text-slate-600">
            {modalType === 'start' 
              ? `Você está prestes a iniciar uma nova submissão para: ${selectedItem}. Deseja continuar?`
              : `Tem certeza que deseja excluir o rascunho "${selectedItem}"? Esta ação não pode ser desfeita.`}
          </p>
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              onClick={confirmAction}
              className={`px-4 py-2 text-sm font-medium text-white rounded-lg ${
                modalType === 'start' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-rose-600 hover:bg-rose-700'
              }`}
            >
              {modalType === 'start' ? 'Iniciar' : 'Excluir'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
