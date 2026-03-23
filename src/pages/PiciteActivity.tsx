import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  FileText, 
  UploadCloud, 
  MessageSquare, 
  Award 
} from 'lucide-react';
import { useToast } from '../components/ToastContext';
import Modal from '../components/Modal';

export default function PiciteActivity() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'evaluate' | 'remind' | 'global' | 'award' | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const handleOpenModal = (type: 'evaluate' | 'remind' | 'global' | 'award', student?: string) => {
    setModalType(type);
    if (student) setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleAction = () => {
    setIsModalOpen(false);
    
    switch (modalType) {
      case 'evaluate':
        addToast('success', `Avaliação enviada para ${selectedStudent}.`);
        break;
      case 'remind':
        addToast('info', `Lembrete enviado para ${selectedStudent}.`);
        break;
      case 'global':
        addToast('success', 'Avaliação global enviada com sucesso.');
        break;
      case 'award':
        addToast('success', 'Indicação para premiação registrada.');
        break;
    }
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
            <h1 className="text-3xl font-bold text-slate-900">Atividades PICITE</h1>
          </div>
          <p className="text-slate-500">Acompanhamento de Orientações e Entregas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Active Orientations */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Meus Orientandos
          </h2>

          {/* Orientation Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-purple-300 transition-all group">
            <div className="p-6 border-b border-slate-100">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm">
                    LM
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Lucas Martins</h3>
                    <p className="text-sm text-slate-500">Medicina • 4º Semestre</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Ativo
                </span>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs font-medium text-slate-500 mb-1">Plano de Trabalho</p>
                <p className="text-sm font-semibold text-slate-900">Avaliação da eficácia de novos protocolos de triagem em emergências pediátricas</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50/50">
              <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                Próximas Entregas
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Relatório Parcial</p>
                      <p className="text-xs text-slate-500">Vence em 15 dias</p>
                    </div>
                  </div>
                  <button 
                    className="text-sm font-medium text-purple-600 hover:text-purple-700 bg-purple-50 px-3 py-1.5 rounded-md transition-colors"
                    onClick={() => handleOpenModal('evaluate', 'Lucas Martins')}
                  >
                    Avaliar
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 line-through">Plano de Trabalho Inicial</p>
                      <p className="text-xs text-slate-500">Entregue e aprovado</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">Concluído</span>
                </div>
              </div>
            </div>
          </div>

          {/* Orientation Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-purple-300 transition-all group">
            <div className="p-6 border-b border-slate-100">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm">
                    AF
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Aline Fernandes</h3>
                    <p className="text-sm text-slate-500">Biomedicina • 6º Semestre</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Ativo
                </span>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs font-medium text-slate-500 mb-1">Plano de Trabalho</p>
                <p className="text-sm font-semibold text-slate-900">Marcadores biomoleculares na detecção precoce de doenças autoimunes</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50/50">
              <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                Próximas Entregas
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm border-l-4 border-l-rose-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Relatório Final</p>
                      <p className="text-xs text-rose-600 font-medium">Atrasado (2 dias)</p>
                    </div>
                  </div>
                  <button 
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
                    onClick={() => handleOpenModal('remind', 'Aline Fernandes')}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Cobrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Info */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Ações Rápidas</h3>
            <div className="space-y-3">
              <button 
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-700 hover:text-purple-700 transition-all group"
                onClick={() => handleOpenModal('global')}
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-slate-400 group-hover:text-purple-500" />
                  Enviar Avaliação Global
                </span>
              </button>
              <button 
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-700 hover:text-purple-700 transition-all group"
                onClick={() => handleOpenModal('award')}
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-slate-400 group-hover:text-purple-500" />
                  Indicar para Premiação
                </span>
              </button>
            </div>
          </div>

          {/* Program Info */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-sm p-6 text-white">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-200" />
              Edital PICITE 2023/2024
            </h3>
            <p className="text-purple-100 text-sm mb-6">
              Fique atento aos prazos do edital vigente. O não cumprimento pode acarretar no cancelamento da bolsa do aluno.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5"></div>
                <div>
                  <p className="text-sm font-semibold">Relatórios Parciais</p>
                  <p className="text-xs text-purple-200">Até 15 de Novembro, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5"></div>
                <div>
                  <p className="text-sm font-semibold">Relatórios Finais</p>
                  <p className="text-xs text-purple-200">Até 10 de Junho, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white/30 mt-1.5"></div>
                <div>
                  <p className="text-sm font-semibold">Apresentação no Simpósio</p>
                  <p className="text-xs text-purple-200">Agosto, 2024</p>
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
          modalType === 'evaluate' ? `Avaliar Relatório - ${selectedStudent}` :
          modalType === 'remind' ? `Enviar Lembrete - ${selectedStudent}` :
          modalType === 'global' ? 'Enviar Avaliação Global' :
          'Indicar para Premiação'
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            {modalType === 'evaluate' && 'Por favor, preencha o formulário de avaliação do relatório parcial.'}
            {modalType === 'remind' && 'Deseja enviar um lembrete automático para o aluno sobre a entrega em atraso?'}
            {modalType === 'global' && 'Envie a avaliação global de todos os seus orientandos deste ciclo.'}
            {modalType === 'award' && 'Indique um aluno destaque para a premiação anual do PICITE.'}
          </p>
          
          {(modalType === 'evaluate' || modalType === 'global') && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Comentários / Parecer</label>
              <textarea 
                className="w-full rounded-lg border-slate-200 border p-2 text-sm focus:ring-purple-500 focus:border-purple-500" 
                rows={4}
                placeholder="Insira seu parecer aqui..."
              />
            </div>
          )}

          {modalType === 'award' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Justificativa</label>
              <textarea 
                className="w-full rounded-lg border-slate-200 border p-2 text-sm focus:ring-purple-500 focus:border-purple-500" 
                rows={4}
                placeholder="Descreva por que este aluno merece a premiação..."
              />
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleAction}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              {modalType === 'remind' ? 'Enviar Lembrete' : 'Confirmar'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Dummy Users icon component since it wasn't imported
function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
