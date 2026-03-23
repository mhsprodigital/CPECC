import React, { useState } from 'react';
import { 
  FileText, 
  Award, 
  Users, 
  TrendingUp, 
  Download, 
  CheckCircle, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function Dashboard() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'viewAll' | 'download' | 'updateLattes' | 'sendReport' | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOpenModal = (type: 'viewAll' | 'download' | 'updateLattes' | 'sendReport', item?: string) => {
    setModalType(type);
    if (item) setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAction = () => {
    setIsModalOpen(false);
    
    switch (modalType) {
      case 'download':
        addToast('success', `Download de ${selectedItem} iniciado.`);
        break;
      case 'updateLattes':
        addToast('success', 'Redirecionando para atualização do Lattes...');
        break;
      case 'sendReport':
        addToast('success', `Relatório para ${selectedItem} enviado com sucesso.`);
        break;
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Painel do Pesquisador</h1>
          <p className="text-slate-500 mt-1">Trajetória Institucional e Produção Científica</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold text-slate-900">Dra. Maria Silva</p>
            <p className="text-sm text-slate-500">Pesquisadora Sênior</p>
          </div>
          <img src="https://i.pravatar.cc/150?img=47" alt="Perfil" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Projetos Ativos</p>
            <p className="text-2xl font-bold text-slate-900">12</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Publicações</p>
            <p className="text-2xl font-bold text-slate-900">48</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Orientandos</p>
            <p className="text-2xl font-bold text-slate-900">8</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Índice H</p>
            <p className="text-2xl font-bold text-slate-900">15</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Projects */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Projetos Recentes</h2>
              <button 
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
                onClick={() => handleOpenModal('viewAll')}
              >
                Ver Todos
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              {/* Project Item */}
              <div className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-2">
                      Aprovado
                    </span>
                    <h3 className="font-semibold text-slate-900">Impacto da IA em Diagnósticos de Saúde</h3>
                  </div>
                  <button 
                    className="text-slate-400 hover:text-slate-600"
                    onClick={() => handleOpenModal('download', 'Projeto: Impacto da IA em Diagnósticos de Saúde')}
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-slate-500 mb-4">Projeto Temático FAPESP • 2023-2025</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-slate-500">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Marco 2/4</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>Próximo relatório: 15 Out</span>
                  </div>
                </div>
              </div>
              
              {/* Project Item */}
              <div className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 mb-2">
                      Em Análise
                    </span>
                    <h3 className="font-semibold text-slate-900">Soluções Sustentáveis de Mobilidade Urbana</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-4">Universal CNPq • Submetido em Set 2023</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-slate-500">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Aguardando Avaliação do Comitê</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates & Documents */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Certificados e Declarações</h2>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                onClick={() => handleOpenModal('download', 'Certificado de Pesquisador')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-slate-900 group-hover:text-blue-700">Certificado de Pesquisador</p>
                    <p className="text-xs text-slate-500">Gerado em Out 2023</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </button>
              <button 
                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                onClick={() => handleOpenModal('download', 'Declaração de Orientação')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-slate-900 group-hover:text-blue-700">Declaração de Orientação</p>
                    <p className="text-xs text-slate-500">2 Orientandos Ativos</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Action Required */}
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
            <h3 className="text-amber-800 font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Ação Necessária
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                <p className="text-sm font-medium text-slate-900">Atualizar Currículo Lattes</p>
                <p className="text-xs text-slate-500 mt-1">Última atualização há 6 meses</p>
                <button 
                  className="mt-2 text-sm text-amber-600 font-medium hover:text-amber-700"
                  onClick={() => handleOpenModal('updateLattes')}
                >
                  Atualizar agora →
                </button>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                <p className="text-sm font-medium text-slate-900">Enviar Relatório Parcial</p>
                <p className="text-xs text-slate-500 mt-1">Projeto: IA em Saúde</p>
                <button 
                  className="mt-2 text-sm text-amber-600 font-medium hover:text-amber-700"
                  onClick={() => handleOpenModal('sendReport', 'IA em Saúde')}
                >
                  Enviar relatório →
                </button>
              </div>
            </div>
          </div>

          {/* Institutional Trajectory */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Trajetória Institucional</h3>
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-6">
              <div className="relative">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <div className="pl-6">
                  <p className="text-sm font-bold text-slate-900">Pesquisador Sênior</p>
                  <p className="text-xs text-slate-500">2020 - Presente</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
                <div className="pl-6">
                  <p className="text-sm font-bold text-slate-900">Pesquisador Associado</p>
                  <p className="text-xs text-slate-500">2015 - 2020</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
                <div className="pl-6">
                  <p className="text-sm font-bold text-slate-900">Pós-Doutorado</p>
                  <p className="text-xs text-slate-500">2012 - 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          modalType === 'viewAll' ? 'Todos os Projetos' :
          modalType === 'download' ? 'Download de Documento' :
          modalType === 'updateLattes' ? 'Atualizar Lattes' :
          'Enviar Relatório'
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            {modalType === 'viewAll' && 'Aqui você veria a lista completa de todos os seus projetos.'}
            {modalType === 'download' && `Deseja baixar o documento: ${selectedItem}?`}
            {modalType === 'updateLattes' && 'Você será redirecionado para a plataforma Lattes para atualizar seu currículo.'}
            {modalType === 'sendReport' && `Deseja iniciar o envio do relatório para o projeto: ${selectedItem}?`}
          </p>
          
          {modalType === 'sendReport' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Anexar Arquivo</label>
              <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              {modalType === 'viewAll' ? 'Fechar' : 'Cancelar'}
            </button>
            {modalType !== 'viewAll' && (
              <button
                onClick={handleAction}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Confirmar
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
