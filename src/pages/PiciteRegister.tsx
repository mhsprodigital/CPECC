import React, { useState } from 'react';
import { 
  GraduationCap, 
  UserPlus, 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Save
} from 'lucide-react';
import { useToast } from '../components/ToastContext';

export default function PiciteRegister() {
  const [step, setStep] = useState(1);
  const { addToast } = useToast();

  const handleSaveDraft = () => {
    addToast('success', 'Rascunho do cadastro salvo com sucesso.');
  };

  const handleSubmit = () => {
    addToast('success', 'Cadastro PICITE enviado com sucesso para avaliação.');
    // Reset form or redirect
    setTimeout(() => setStep(1), 2000);
  };

  const handleFileUpload = () => {
    addToast('info', 'Abrindo seletor de arquivos...');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Cadastro PICITE</h1>
        </div>
        <p className="text-slate-500">Programa de Iniciação Científica e Tecnológica</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-purple-600 -z-10 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          
          {[
            { num: 1, label: 'Dados do Aluno', icon: UserPlus },
            { num: 2, label: 'Plano de Trabalho', icon: FileText },
            { num: 3, label: 'Documentação', icon: UploadCloud }
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors shadow-sm ${
                step >= s.num ? 'bg-purple-600 text-white border-2 border-purple-600' : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
              </div>
              <span className={`text-xs font-medium hidden md:block ${step >= s.num ? 'text-purple-700' : 'text-slate-500'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          
          {/* Step 1: Student Data */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-purple-600" />
                Dados do Aluno Orientando
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="Nome do aluno" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">CPF</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="000.000.000-00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">E-mail Institucional</label>
                  <input type="email" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="aluno@instituicao.edu.br" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Curso</label>
                  <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Selecione o curso</option>
                    <option value="medicina">Medicina</option>
                    <option value="enfermagem">Enfermagem</option>
                    <option value="biomedicina">Biomedicina</option>
                    <option value="fisioterapia">Fisioterapia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Semestre / Período Atual</label>
                  <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Selecione o semestre</option>
                    <option value="1">1º Semestre</option>
                    <option value="2">2º Semestre</option>
                    <option value="3">3º Semestre</option>
                    <option value="4">4º Semestre</option>
                    <option value="5">5º Semestre</option>
                    <option value="6">6º Semestre</option>
                    <option value="7">7º Semestre</option>
                    <option value="8">8º Semestre</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Link do Currículo Lattes do Aluno</label>
                  <input type="url" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="http://lattes.cnpq.br/..." />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Work Plan */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Plano de Trabalho
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Projeto Guarda-chuva (Opcional)</label>
                  <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Vincular a um projeto existente</option>
                    <option value="prj1">PRJ-2023-045: Desenvolvimento de Nanomateriais...</option>
                    <option value="prj2">PRJ-2023-089: Análise de Microplásticos...</option>
                  </select>
                  <p className="text-xs text-slate-500">Selecione se este plano de trabalho faz parte de um projeto maior já cadastrado.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Título do Plano de Trabalho</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="Título específico da pesquisa do aluno" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Resumo do Plano</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Descreva brevemente os objetivos e a metodologia..."></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Data de Início Prevista</label>
                    <input type="date" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Data de Término Prevista</label>
                    <input type="date" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documentation */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-purple-600" />
                Documentação
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-between group hover:border-purple-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-purple-600 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Plano de Trabalho Completo (PDF)</p>
                      <p className="text-xs text-slate-500">Obrigatório • Max 10MB</p>
                    </div>
                  </div>
                  <button 
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                    onClick={handleFileUpload}
                  >
                    Selecionar Arquivo
                  </button>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-between group hover:border-purple-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-purple-600 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Histórico Escolar do Aluno (PDF)</p>
                      <p className="text-xs text-slate-500">Obrigatório • Max 5MB</p>
                    </div>
                  </div>
                  <button 
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                    onClick={handleFileUpload}
                  >
                    Selecionar Arquivo
                  </button>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-between group hover:border-purple-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-purple-600 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Termo de Compromisso Assinado (PDF)</p>
                      <p className="text-xs text-slate-500">Obrigatório • Max 5MB</p>
                    </div>
                  </div>
                  <button 
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                    onClick={handleFileUpload}
                  >
                    Selecionar Arquivo
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">Atenção</p>
                  <p>Certifique-se de que todos os documentos estão legíveis e assinados corretamente antes de enviar. A submissão passará por avaliação do comitê do PICITE.</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
          <button 
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          <div className="flex items-center gap-3">
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              onClick={handleSaveDraft}
            >
              <Save className="w-4 h-4" />
              Salvar Rascunho
            </button>
            
            {step < 3 ? (
              <button 
                onClick={() => setStep(Math.min(3, step + 1))}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-all shadow-sm shadow-purple-600/20"
              >
                Próximo Passo
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-bold hover:bg-purple-700 transition-all shadow-sm shadow-purple-600/20"
                onClick={handleSubmit}
              >
                <CheckCircle2 className="w-4 h-4" />
                Enviar Cadastro
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
