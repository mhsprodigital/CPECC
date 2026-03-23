import React, { useState } from 'react';
import { User, Building2, GraduationCap, Users, CheckCircle2, Upload, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ToastContext';

export default function Register() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      addToast('success', 'Cadastro enviado para validação com sucesso!');
      navigate('/');
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Cadastro de Pesquisador</h1>
        <p className="text-slate-500 mt-2">Complete seu perfil para acessar o portal CPECC</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 -z-10 transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          
          {[
            { num: 1, label: 'Pessoal', icon: User },
            { num: 2, label: 'Institucional', icon: Building2 },
            { num: 3, label: 'Acadêmico', icon: GraduationCap },
            { num: 4, label: 'Demográfico', icon: Users }
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-2 bg-slate-50 px-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-50 transition-colors ${
                step >= s.num ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-400'
              }`}>
                {step > s.num ? <CheckCircle2 className="w-6 h-6" /> : <s.icon className="w-6 h-6" />}
              </div>
              <span className={`text-sm font-medium ${step >= s.num ? 'text-slate-900' : 'text-slate-400'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <form onSubmit={handleNextStep}>
          <div className="p-6 md:p-8">
            
            {/* STEP 1: DADOS PESSOAIS */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  Dados Pessoais
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Nome Completo *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Digite seu nome completo" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">CPF *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="000.000.000-00" />
                      <p className="text-xs text-slate-500">Essencial para identificação única.</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Contato</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">E-mail Institucional *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="nome@instituicao.edu.br" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">E-mail Pessoal *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Telefone/WhatsApp *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                        <p className="text-xs text-slate-500">Para avisos rápidos sobre correções solicitadas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Endereço Pessoal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">CEP *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="00000-000" />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700">Endereço Completo *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Rua, Número, Complemento, Bairro, Cidade - UF" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: DADOS INSTITUCIONAIS */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  Dados Institucionais
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Vínculo *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Selecione o vínculo...</option>
                        <option value="servidor">Servidor SES-DF</option>
                        <option value="residente">Residente</option>
                        <option value="estudante">Estudante de Graduação</option>
                        <option value="externo">Pesquisador Externo</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Lotação/Unidade *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Selecione a unidade...</option>
                        <option value="hrt">HRT</option>
                        <option value="regional_sul">Regional Sul</option>
                        <option value="adm_central">Administração Central</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Setor Específico *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Ex: Pronto Socorro, UTI Adulto" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Matrícula (Se aplicável)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Sua matrícula" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Local da Pesquisa</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Endereço + CEP *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Endereço do local da pesquisa" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Endereço SEI *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Sigla da unidade no SEI" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Carga Horária disponível para pesquisa (Opcional)</label>
                      <div className="flex items-center gap-4">
                        <input type="number" min="0" max="40" className="w-32 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Horas" />
                        <span className="text-slate-500">horas semanais</span>
                      </div>
                      <p className="text-xs text-slate-500">Útil para gestão de tempo. Responsivo por perfil do usuário.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: FORMAÇÃO ACADÊMICA */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Formação Acadêmica
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Maior Titulação *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Selecione a titulação...</option>
                        <option value="graduacao">Graduação</option>
                        <option value="especializacao">Especialização</option>
                        <option value="mestrado">Mestrado</option>
                        <option value="doutorado">Doutorado</option>
                        <option value="pos_doutorado">Pós-Doutorado</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Área de Conhecimento (Padrão CNPq) *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Selecione a área...</option>
                        <option value="saude">Ciências da Saúde</option>
                        <option value="biologicas">Ciências Biológicas</option>
                        <option value="exatas">Ciências Exatas e da Terra</option>
                        <option value="humanas">Ciências Humanas</option>
                        <option value="sociais">Ciências Sociais Aplicadas</option>
                      </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-700">Instituição de Formação *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Nome da instituição" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Link do Currículo Lattes *</label>
                      <input required type="url" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="http://lattes.cnpq.br/..." />
                      <p className="text-xs text-slate-500">Obrigatório para pesquisadores no Brasil. Atualizado nos últimos 60 dias.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">ORCID (Opcional)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="0000-0000-0000-0000" />
                      <p className="text-xs text-slate-500">Identificador internacional de pesquisador.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CARACTERÍSTICAS SOCIODEMOGRÁFICAS E DOCUMENTOS */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Características Sociodemográficas & Documentos
                </h2>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Gênero *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Selecione...</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="nao_binario">Não-binário</option>
                        <option value="outro">Outro</option>
                        <option value="prefere_nao_dizer">Prefiro não informar</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Raça/Cor (Padrão IBGE) *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Selecione...</option>
                        <option value="branca">Branca</option>
                        <option value="preta">Preta</option>
                        <option value="parda">Parda</option>
                        <option value="amarela">Amarela</option>
                        <option value="indigena">Indígena</option>
                        <option value="prefere_nao_dizer">Prefiro não informar</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Data de Nascimento (Para Faixa Etária) *</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                      <p className="text-xs text-slate-500">A faixa etária será calculada automaticamente.</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg font-semibold text-slate-900">Upload de Documentos</h3>
                      <div className="group relative">
                        <AlertCircle className="w-4 h-4 text-slate-400 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                          Documentos necessários: RG/CPF, Dados bancários, Comprovante de residência, Título de eleitor, Certificado de reservista, Certificado de escolaridade, Certidão de casamento.
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Document Upload Cards */}
                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Cópia do RG/CPF *</p>
                        <p className="text-xs text-slate-500">PDF ou JPG (Max 5MB)</p>
                      </div>

                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Comprovante de Vínculo *</p>
                        <p className="text-xs text-slate-500">Institucional (PDF)</p>
                      </div>

                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <User className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Foto de Perfil</p>
                        <p className="text-xs text-slate-500">JPG ou PNG (Max 2MB)</p>
                      </div>
                      
                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group md:col-span-3">
                        <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Outros Documentos</p>
                        <p className="text-xs text-slate-500">Dados bancários, residência, eleitor, reservista, escolaridade, casamento (Se aplicável)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
          </div>
          
          <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-between items-center">
            {step > 1 ? (
              <button 
                type="button"
                onClick={handlePrevStep}
                className="px-6 py-3 rounded-xl font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                Voltar
              </button>
            ) : (
              <button 
                type="button"
                className="px-6 py-3 rounded-xl font-medium text-slate-500 hover:bg-slate-200 transition-colors"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            )}
            
            <button 
              type="submit"
              className="px-8 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20 flex items-center gap-2"
            >
              {step === 4 ? 'Salvar e Enviar para Validação' : 'Próxima Etapa'}
              {step !== 4 && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

