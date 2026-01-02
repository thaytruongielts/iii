
import React, { useState, useCallback, useMemo } from 'react';
import { QUESTIONS } from './constants';
import { QuestionType, UserAnswers } from './types';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isFinished, setIsFinished] = useState(false);
  const [viewedResults, setViewedResults] = useState(false);

  const handleAnswerChange = useCallback((questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }, []);

  const score = useMemo(() => {
    let correct = 0;
    QUESTIONS.forEach(q => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase();
      const correctAnswer = q.correctAnswer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        correct++;
      }
    });
    return (10 * correct) / QUESTIONS.length;
  }, [answers]);

  const correctCount = useMemo(() => {
    return QUESTIONS.filter(q => {
        const userAnswer = (answers[q.id] || '').trim().toLowerCase();
        const correctAnswer = q.correctAnswer.trim().toLowerCase();
        return userAnswer === correctAnswer;
    }).length;
  }, [answers]);

  const resetQuiz = () => {
    setAnswers({});
    setIsFinished(false);
    setViewedResults(false);
    window.scrollTo(0, 0);
  };

  const phoneticsQuestions = QUESTIONS.filter(q => q.category === 'PHONETICS');
  const vocabularyQuestions = QUESTIONS.filter(q => q.category === 'VOCABULARY');

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 text-center">
          <div className="mb-6">
            <span className="inline-block p-4 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Kết quả bài làm</h1>
            <p className="text-slate-500">Dưới đây là thang điểm của bạn dựa trên 90 câu hỏi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-5xl font-black text-indigo-600 mb-1">{score.toFixed(1)}</div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Điểm số (Thang 10)</div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-5xl font-black text-emerald-500 mb-1">{correctCount} / {QUESTIONS.length}</div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Câu trả lời đúng</div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setViewedResults(true)}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition shadow-lg"
            >
              Xem chi tiết đúng/sai
            </button>
            <button 
              onClick={resetQuiz}
              className="w-full bg-white text-slate-600 border border-slate-200 font-bold py-4 rounded-xl hover:bg-slate-50 transition"
            >
              Làm lại bài tập
            </button>
          </div>

          {viewedResults && (
            <div className="mt-12 text-left border-t border-slate-100 pt-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Chi tiết từng câu</h3>
              <div className="space-y-3">
                {QUESTIONS.map((q) => {
                  const isCorrect = (answers[q.id] || '').trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                  return (
                    <div key={q.id} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700">Câu {q.id}: {isCorrect ? 'Đúng' : 'Sai'}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">English Grade 7 - Mastery</h1>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Tiến độ: {Object.keys(answers).length} / {QUESTIONS.length}
            </div>
            <button 
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn nộp bài?')) {
                  setIsFinished(true);
                  window.scrollTo(0,0);
                }
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-bold text-sm transition shadow-lg shadow-indigo-200"
            >
              Nộp bài
            </button>
          </div>
        </div>
        <div className="w-full h-1 bg-slate-100">
          <div 
            className="h-full bg-indigo-600 transition-all duration-300" 
            style={{ width: `${(Object.keys(answers).length / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-4">90 Bài Tập Tiếng Anh Lớp 7</h2>
          <p className="text-slate-500 leading-relaxed">
            Bộ bài tập bám sát chương trình học kỳ 2 với 30 dạng bài chi tiết. 
            Vui lòng chọn hoặc điền câu trả lời cho từng câu dưới đây. Điểm số sẽ được tính theo thang điểm 10.
          </p>
        </div>

        {/* PHONETICS Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold">I</span>
            <h2 className="text-2xl font-bold text-slate-800">PHẦN I: NGỮ ÂM (PHONETICS)</h2>
          </div>
          <div className="space-y-6">
            {phoneticsQuestions.map((q) => (
              <QuestionCard 
                key={q.id} 
                question={q} 
                currentAnswer={answers[q.id]} 
                onAnswerChange={handleAnswerChange} 
              />
            ))}
          </div>
        </section>

        {/* VOCABULARY Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">II</span>
            <h2 className="text-2xl font-bold text-slate-800">PHẦN II: TỪ VỰNG & NGỮ NGHĨA</h2>
          </div>
          <div className="space-y-6">
            {vocabularyQuestions.map((q) => (
              <QuestionCard 
                key={q.id} 
                question={q} 
                currentAnswer={answers[q.id]} 
                onAnswerChange={handleAnswerChange} 
              />
            ))}
          </div>
        </section>

        <div className="mt-12 py-8 border-t border-slate-200">
           <button 
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn nộp bài?')) {
                  setIsFinished(true);
                  window.scrollTo(0,0);
                }
              }}
              className="w-full bg-slate-900 hover:bg-black text-white py-6 rounded-2xl font-bold text-xl transition shadow-xl"
            >
              Nộp bài & Chấm điểm
            </button>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-10 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm">English Grade 7 Semester 2 - Specialized Learning Tool</p>
        </div>
      </footer>
    </div>
  );
};

interface QuestionCardProps {
  question: any;
  currentAnswer?: string;
  onAnswerChange: (id: number, val: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, currentAnswer, onAnswerChange }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-100 transition">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
          {question.id}
        </span>
        <div className="flex-1">
          <div className="mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            {question.subcategory}
          </div>
          <p className="text-slate-800 font-medium mb-6 leading-relaxed">
            {question.text}
          </p>

          {question.type === QuestionType.MULTIPLE_CHOICE ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {question.options?.map((opt: any) => (
                <button
                  key={opt.id}
                  onClick={() => onAnswerChange(question.id, opt.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition ${
                    currentAnswer === opt.id
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs ${
                    currentAnswer === opt.id ? 'bg-indigo-400' : 'bg-slate-100'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="font-medium">{opt.text}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-2">
              <input 
                type="text"
                placeholder="Nhập câu trả lời của bạn..."
                value={currentAnswer || ''}
                onChange={(e) => onAnswerChange(question.id, e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition font-medium"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
