import React, { useState } from 'react';
import { 
  Banknote, 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Save,
  Info
} from 'lucide-react';
import { useToast } from '../components/ToastContext';

export default function FundingSubmit() {
  const [step, setStep] = useState(1);
  const [fundingType, setFundingType] = useState('');
  const { addToast } = useToast();

  const handleSaveDraft = () => {
    addToast('success', 'Rascunho da solicitação salvo com sucesso.');
  };

  const handleSubmit = () => {
    addToast('success', 'Solicitação de fomento enviada com sucesso.');
    // Reset form or redirect
    setTimeout(() => {
      setStep(1);
      setFundingType('');
    }, 2000);
  };

  const handleFileUpload = () => {
    addToast('info', 'Abrindo seletor de arquivos...');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
            <Banknote className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Solicitação de Fomento</h1>
        </div>
        <p className="text-slate-500">Submissão de pedidos de auxílio financeiro para pesquisa</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-600 -z-10 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          
          {[
            { num: 1, label: 'Tipo de Auxílio', icon: Banknote },
            { num: 2, label: 'Detalhes do Pedido', icon: FileText },
            { num: 3, label: 'Orçamento & Anexos', icon: UploadCloud }
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors shadow-sm ${
                step >= s.num ? 'bg-emerald-600 text-white border-2 border-emerald-600' : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
              </div>
              <span className={`text-xs font-medium hidden md:block ${step >= s.num ? 'text-emerald-700' : 'text-slate-500'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          
          {/* Step 1: Funding Type */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-emerald-600" />
                Selecione o Tipo de Auxílio
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Option 1 */}
                <label className={`relative flex flex-col p-5 cursor-pointer rounded-xl border-2 transition-all ${fundingType === 'equipamento' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 hover:border-emerald-200 hover:bg-slate-50'}`}>
                  <input type="radio" name="fundingType" value="equipamento" className="sr-only" onChange={(e) => setFundingType(e.target.value)} checked={fundingType === 'equipamento'} />
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">Auxílio Equipamento</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${fundingType === 'equipamento' ? 'border-emerald-500' : 'border-slate-300'}`}>
                      {fundingType === 'equipamento' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">Aquisição de equipamentos permanentes essenciais para a execução do projeto de pesquisa.</p>
                </label>

                {/* Option 2 */}
                <label className={`relative flex flex-col p-5 cursor-pointer rounded-xl border-2 transition-all ${fundingType === 'consumo' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 hover:border-emerald-200 hover:bg-slate-50'}`}>
                  <input type="radio" name="fundingType" value="consumo" className="sr-only" onChange={(e) => setFundingType(e.target.value)} checked={fundingType === 'consumo'} />
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">Material de Consumo</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${fundingType === 'consumo' ? 'border-emerald-500' : 'border-slate-300'}`}>
                      {fundingType === 'consumo' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">Compra de reagentes, vidrarias, suprimentos de informática e outros materiais de uso contínuo.</p>
                </label>

                {/* Option 3 */}
                <label className={`relative flex flex-col p-5 cursor-pointer rounded-xl border-2 transition-all ${fundingType === 'viagem' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 hover:border-emerald-200 hover:bg-slate-50'}`}>
                  <input type="radio" name="fundingType" value="viagem" className="sr-only" onChange={(e) => setFundingType(e.target.value)} checked={fundingType === 'viagem'} />
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">Auxílio Viagem / Evento</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${fundingType === 'viagem' ? 'border-emerald-500' : 'border-slate-300'}`}>
                      {fundingType === 'viagem' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">Custeio de passagens, diárias e taxas de inscrição para apresentação de trabalhos em eventos científicos.</p>
                </label>

                {/* Option 4 */}
                <label className={`relative flex flex-col p-5 cursor-pointer rounded-xl border-2 transition-all ${fundingType === 'publicacao' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 hover:border-emerald-200 hover:bg-slate-50'}`}>
                  <input type="radio" name="fundingType" value="publicacao" className="sr-only" onChange={(e) => setFundingType(e.target.value)} checked={fundingType === 'publicacao'} />
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">Taxa de Publicação</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${fundingType === 'publicacao' ? 'border-emerald-500' : 'border-slate-300'}`}>
                      {fundingType === 'publicacao' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">Pagamento de taxas de processamento de artigos (APC) em periódicos de alto impacto.</p>
                </label>
              </div>
            </div>
          )}

          {/* Step 2: Request Details */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                Detalhes do Pedido
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Vincular a Projeto Existente</label>
                  <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Selecione o projeto (Obrigatório)</option>
                    <option value="prj1">PRJ-2023-045: Desenvolvimento de Nanomateriais...</option>
                    <option value="prj2">PRJ-2023-089: Análise de Microplásticos...</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Título da Solicitação</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="Ex: Aquisição de Reagentes para Fase 2" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Justificativa</label>
                  <textarea rows={5} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Justifique a necessidade deste fomento para o andamento da pesquisa..."></textarea>
                  <p className="text-xs text-slate-500">Explique claramente como este recurso impactará os resultados do projeto.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Budget & Attachments */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-emerald-600" />
                Orçamento e Anexos
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Valor Total Solicitado (R$)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">R$</span>
                    <input type="text" className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all text-lg font-semibold" placeholder="0,00" />
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Regras para Orçamentos</p>
                    <p>Para solicitações acima de R$ 1.000,00, é obrigatório anexar no mínimo 3 orçamentos distintos de fornecedores diferentes.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-slate-700">Anexos Necessários</label>
                  
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group hover:border-emerald-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Planilha Orçamentária Detalhada</p>
                        <p className="text-xs text-slate-500">Modelo padrão institucional (Excel/PDF)</p>
                      </div>
                    </div>
                    <button 
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap"
                      onClick={handleFileUpload}
                    >
                      Selecionar Arquivo
                    </button>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group hover:border-emerald-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Orçamentos de Fornecedores</p>
                        <p className="text-xs text-slate-500">Agrupe os 3 orçamentos em um único PDF</p>
                      </div>
                    </div>
                    <button 
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap"
                      onClick={handleFileUpload}
                    >
                      Selecionar Arquivo
                    </button>
                  </div>
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
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              onClick={handleSaveDraft}
            >
              <Save className="w-4 h-4" />
              Salvar Rascunho
            </button>
            
            {step < 3 ? (
              <button 
                onClick={() => setStep(Math.min(3, step + 1))}
                disabled={step === 1 && !fundingType}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm shadow-emerald-600/20"
              >
                Próximo Passo
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/20"
                onClick={handleSubmit}
              >
                <CheckCircle2 className="w-4 h-4" />
                Enviar Solicitação
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
