
import { Question, QuestionType } from './types';

export const QUESTIONS: Question[] = [
  // 1. Phonetics - Vowels
  { id: 1, category: 'PHONETICS', subcategory: 'Vowels', text: 'Chọn từ có phần gạch chân phát âm khác: A. bread B. head C. heat D. dead', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'bread'}, {id: 'B', text: 'head'}, {id: 'C', text: 'heat'}, {id: 'D', text: 'dead'}], correctAnswer: 'C' },
  { id: 2, category: 'PHONETICS', subcategory: 'Vowels', text: 'Chọn từ có phần gạch chân phát âm khác: A. station B. plane C. traffic D. mistake', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'station'}, {id: 'B', text: 'plane'}, {id: 'C', text: 'traffic'}, {id: 'D', text: 'mistake'}], correctAnswer: 'C' },
  { id: 3, category: 'PHONETICS', subcategory: 'Vowels', text: 'Chọn từ có phần gạch chân phát âm khác: A. food B. moon C. foot D. pool', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'food'}, {id: 'B', text: 'moon'}, {id: 'C', text: 'foot'}, {id: 'D', text: 'pool'}], correctAnswer: 'C' },
  
  // 2. Phonetics - Consonants
  { id: 4, category: 'PHONETICS', subcategory: 'Consonants', text: 'Chọn từ có phần gạch chân phát âm khác: A. think B. they C. thumb D. three', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'think'}, {id: 'B', text: 'they'}, {id: 'C', text: 'thumb'}, {id: 'D', text: 'three'}], correctAnswer: 'B' },
  { id: 5, category: 'PHONETICS', subcategory: 'Consonants', text: 'Chọn từ có phần gạch chân phát âm khác: A. chemistry B. character C. school D. children', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'chemistry'}, {id: 'B', text: 'character'}, {id: 'C', text: 'school'}, {id: 'D', text: 'children'}], correctAnswer: 'D' },
  { id: 6, category: 'PHONETICS', subcategory: 'Consonants', text: 'Chọn từ có phần gạch chân phát âm khác: A. hour B. hot C. here D. hello', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'hour'}, {id: 'B', text: 'hot'}, {id: 'C', text: 'here'}, {id: 'D', text: 'hello'}], correctAnswer: 'A' },

  // 3. Phonetics - ed
  { id: 7, category: 'PHONETICS', subcategory: 'Suffix -ed', text: 'Phân biệt cách phát âm đuôi -ed: A. played B. lived C. watched D. listened', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'played'}, {id: 'B', text: 'lived'}, {id: 'C', text: 'watched'}, {id: 'D', text: 'listened'}], correctAnswer: 'C' },
  { id: 8, category: 'PHONETICS', subcategory: 'Suffix -ed', text: 'Phân biệt cách phát âm đuôi -ed: A. wanted B. needed C. visited D. stopped', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'wanted'}, {id: 'B', text: 'needed'}, {id: 'C', text: 'visited'}, {id: 'D', text: 'stopped'}], correctAnswer: 'D' },
  { id: 9, category: 'PHONETICS', subcategory: 'Suffix -ed', text: 'Phân biệt cách phát âm đuôi -ed: A. washed B. looked C. missed D. opened', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'washed'}, {id: 'B', text: 'looked'}, {id: 'C', text: 'missed'}, {id: 'D', text: 'opened'}], correctAnswer: 'D' },

  // 4. Phonetics - s/es
  { id: 10, category: 'PHONETICS', subcategory: 'Suffix -s/es', text: 'Phân biệt cách phát âm đuôi -s/-es: A. books B. maps C. doors D. cats', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'books'}, {id: 'B', text: 'maps'}, {id: 'C', text: 'doors'}, {id: 'D', text: 'cats'}], correctAnswer: 'C' },
  { id: 11, category: 'PHONETICS', subcategory: 'Suffix -s/es', text: 'Phân biệt cách phát âm đuôi -s/-es: A. watches B. boxes C. lives D. buses', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'watches'}, {id: 'B', text: 'boxes'}, {id: 'C', text: 'lives'}, {id: 'D', text: 'buses'}], correctAnswer: 'C' },
  { id: 12, category: 'PHONETICS', subcategory: 'Suffix -s/es', text: 'Phân biệt cách phát âm đuôi -s/-es: A. potatoes B. shoes C. plays D. lamps', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'potatoes'}, {id: 'B', text: 'shoes'}, {id: 'C', text: 'plays'}, {id: 'D', text: 'lamps'}], correctAnswer: 'D' },

  // 5. Stress 1st
  { id: 13, category: 'PHONETICS', subcategory: 'Word Stress', text: 'Tìm từ có trọng âm chính rơi vào âm tiết thứ nhất: A. parade B. story C. balloon D. machine', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'parade'}, {id: 'B', text: 'story'}, {id: 'C', text: 'balloon'}, {id: 'D', text: 'machine'}], correctAnswer: 'B' },
  { id: 14, category: 'PHONETICS', subcategory: 'Word Stress', text: 'Tìm từ có trọng âm chính rơi vào âm tiết thứ nhất: A. happy B. alone C. asleep D. afraid', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'happy'}, {id: 'B', text: 'alone'}, {id: 'C', text: 'asleep'}, {id: 'D', text: 'afraid'}], correctAnswer: 'A' },
  { id: 15, category: 'PHONETICS', subcategory: 'Word Stress', text: 'Tìm từ có trọng âm chính rơi vào âm tiết thứ nhất: A. traffic B. agree C. remind D. enjoy', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'traffic'}, {id: 'B', text: 'agree'}, {id: 'C', text: 'remind'}, {id: 'D', text: 'enjoy'}], correctAnswer: 'A' },

  // 6. Stress 2nd
  { id: 16, category: 'PHONETICS', subcategory: 'Word Stress', text: 'Tìm từ có trọng âm chính rơi vào âm tiết thứ hai: A. open B. listen C. perform D. flower', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'open'}, {id: 'B', text: 'listen'}, {id: 'C', text: 'perform'}, {id: 'D', text: 'flower'}], correctAnswer: 'C' },
  { id: 17, category: 'PHONETICS', subcategory: 'Word Stress', text: 'Tìm từ có trọng âm chính rơi vào âm tiết thứ hai: A. music B. review C. sunday D. pizza', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'music'}, {id: 'B', text: 'review'}, {id: 'C', text: 'sunday'}, {id: 'D', text: 'pizza'}], correctAnswer: 'B' },
  { id: 18, category: 'PHONETICS', subcategory: 'Word Stress', text: 'Tìm từ có trọng âm chính rơi vào âm tiết thứ hai: A. polite B. boring C. distance D. center', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'polite'}, {id: 'B', text: 'boring'}, {id: 'C', text: 'distance'}, {id: 'D', text: 'center'}], correctAnswer: 'A' },

  // 7. Stress Contrast
  { id: 19, category: 'PHONETICS', subcategory: 'Word Stress Contrast', text: 'Chọn từ có trọng âm khác: A. record (v) B. present (v) C. project (n) D. export (v)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'record (v)'}, {id: 'B', text: 'present (v)'}, {id: 'C', text: 'project (n)'}, {id: 'D', text: 'export (v)'}], correctAnswer: 'C' },
  { id: 20, category: 'PHONETICS', subcategory: 'Word Stress Contrast', text: 'Chọn từ có trọng âm khác: A. answer (n) B. visit (v) C. travel (v) D. delay (v)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'answer (n)'}, {id: 'B', text: 'visit (v)'}, {id: 'C', text: 'travel (v)'}, {id: 'D', text: 'delay (v)'}], correctAnswer: 'D' },
  { id: 21, category: 'PHONETICS', subcategory: 'Word Stress Contrast', text: 'Chọn từ có trọng âm khác: A. picture B. artist C. relax D. morning', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'picture'}, {id: 'B', text: 'artist'}, {id: 'C', text: 'relax'}, {id: 'D', text: 'morning'}], correctAnswer: 'C' },

  // 8. Long Word Stress
  { id: 22, category: 'PHONETICS', subcategory: 'Complex Word Stress', text: 'Chọn từ có trọng âm khác: A. pollution B. festival C. confusing D. attention', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'pollution'}, {id: 'B', text: 'festival'}, {id: 'C', text: 'confusing'}, {id: 'D', text: 'attention'}], correctAnswer: 'B' },
  { id: 23, category: 'PHONETICS', subcategory: 'Complex Word Stress', text: 'Chọn từ có trọng âm khác: A. economic B. scientific C. musical D. fantastic', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'economic'}, {id: 'B', text: 'scientific'}, {id: 'C', text: 'musical'}, {id: 'D', text: 'fantastic'}], correctAnswer: 'C' },
  { id: 24, category: 'PHONETICS', subcategory: 'Complex Word Stress', text: 'Chọn từ có trọng âm khác: A. national B. cultural C. personal D. electrical', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'national'}, {id: 'B', text: 'cultural'}, {id: 'C', text: 'personal'}, {id: 'D', text: 'electrical'}], correctAnswer: 'D' },

  // 9. Silent Letters
  { id: 25, category: 'PHONETICS', subcategory: 'Silent Letters', text: 'Từ nào có âm "k" bị câm?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Milk'}, {id: 'B', text: 'Knee'}, {id: 'C', text: 'Kitchen'}, {id: 'D', text: 'Like'}], correctAnswer: 'B' },
  { id: 26, category: 'PHONETICS', subcategory: 'Silent Letters', text: 'Từ nào có âm "h" bị câm?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Honest'}, {id: 'B', text: 'Honey'}, {id: 'C', text: 'House'}, {id: 'D', text: 'Happy'}], correctAnswer: 'A' },
  { id: 27, category: 'PHONETICS', subcategory: 'Silent Letters', text: 'Từ nào có âm "w" bị câm?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Water'}, {id: 'B', text: 'Wrong'}, {id: 'C', text: 'Wait'}, {id: 'D', text: 'World'}], correctAnswer: 'B' },

  // 10. Intonation
  { id: 28, category: 'PHONETICS', subcategory: 'Intonation', text: 'Câu "What time does the film start?" thường có ngữ điệu:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Lên giọng'}, {id: 'B', text: 'Xuống giọng'}], correctAnswer: 'B' },
  { id: 29, category: 'PHONETICS', subcategory: 'Intonation', text: 'Câu "Do you like watching comedies?" thường có ngữ điệu:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Lên giọng'}, {id: 'B', text: 'Xuống giọng'}], correctAnswer: 'A' },
  { id: 30, category: 'PHONETICS', subcategory: 'Intonation', text: 'Câu "Is it far from here to the cinema?" thường có ngữ điệu:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Lên giọng'}, {id: 'B', text: 'Xuống giọng'}], correctAnswer: 'A' },

  // 11. Odd One Out
  { id: 31, category: 'VOCABULARY', subcategory: 'Odd one out', text: 'Chọn từ khác loại: A. Bus B. Train C. Pilot D. Plane', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Bus'}, {id: 'B', text: 'Train'}, {id: 'C', text: 'Pilot'}, {id: 'D', text: 'Plane'}], correctAnswer: 'C' },
  { id: 32, category: 'VOCABULARY', subcategory: 'Odd one out', text: 'Chọn từ khác loại: A. Comedy B. Cinema C. Horror D. Documentary', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Comedy'}, {id: 'B', text: 'Cinema'}, {id: 'C', text: 'Horror'}, {id: 'D', text: 'Documentary'}], correctAnswer: 'B' },
  { id: 33, category: 'VOCABULARY', subcategory: 'Odd one out', text: 'Chọn từ khác loại: A. Solar B. Wind C. Coal D. Hydro', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Solar'}, {id: 'B', text: 'Wind'}, {id: 'C', text: 'Coal'}, {id: 'D', text: 'Hydro'}], correctAnswer: 'C' },

  // 12. Definitions
  { id: 34, category: 'VOCABULARY', subcategory: 'Definitions', text: '"Pedestrian" nghĩa là:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Người lái xe'}, {id: 'B', text: 'Người đi bộ'}, {id: 'C', text: 'Cảnh sát giao thông'}], correctAnswer: 'B' },
  { id: 35, category: 'VOCABULARY', subcategory: 'Definitions', text: '"Renewable energy" nghĩa là:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Năng lượng cạn kiệt'}, {id: 'B', text: 'Năng lượng tái tạo'}, {id: 'C', text: 'Năng lượng hóa thạch'}], correctAnswer: 'B' },
  { id: 36, category: 'VOCABULARY', subcategory: 'Definitions', text: '"Plot" trong phim nghĩa là:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Diễn viên'}, {id: 'B', text: 'Đạo diễn'}, {id: 'C', text: 'Cốt truyện'}], correctAnswer: 'C' },

  // 13. Context
  { id: 37, category: 'VOCABULARY', subcategory: 'Context', text: 'You must stop when the traffic light is ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'green'}, {id: 'B', text: 'red'}, {id: 'C', text: 'yellow'}], correctAnswer: 'B' },
  { id: 38, category: 'VOCABULARY', subcategory: 'Context', text: 'We put solar ________ on the roof of our house to get energy.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'panels'}, {id: 'B', text: 'bars'}, {id: 'C', text: 'poles'}], correctAnswer: 'A' },
  { id: 39, category: 'VOCABULARY', subcategory: 'Context', text: 'People act and dance in a street ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'parade'}, {id: 'B', text: 'meeting'}, {id: 'C', text: 'cinema'}], correctAnswer: 'A' },

  // 14. Collocations
  { id: 40, category: 'VOCABULARY', subcategory: 'Collocations', text: 'We should ________ energy to protect the environment.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'make'}, {id: 'B', text: 'save'}, {id: 'C', text: 'do'}], correctAnswer: 'B' },
  { id: 41, category: 'VOCABULARY', subcategory: 'Collocations', text: 'I was late because of a traffic ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'jam'}, {id: 'B', text: 'block'}, {id: 'C', text: 'stuck'}], correctAnswer: 'A' },
  { id: 42, category: 'VOCABULARY', subcategory: 'Collocations', text: 'He plays a ________ role in the movie.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'main'}, {id: 'B', text: 'leader'}, {id: 'C', text: 'head'}], correctAnswer: 'A' },

  // 15. Word Form: V -> N
  { id: 43, category: 'VOCABULARY', subcategory: 'Word Form', text: 'His ________ was excellent. (perform -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'performance'}, {id: 'B', text: 'performer'}], correctAnswer: 'A' },
  { id: 44, category: 'VOCABULARY', subcategory: 'Word Form', text: 'We saw a ________ of robots at the show. (collect -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'collection'}, {id: 'B', text: 'collector'}], correctAnswer: 'A' },
  { id: 45, category: 'VOCABULARY', subcategory: 'Word Form', text: 'The ________ of the film is Spielberg. (direct -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'director'}, {id: 'B', text: 'direction'}], correctAnswer: 'A' },

  // 16. Word Form: N -> Adj
  { id: 46, category: 'VOCABULARY', subcategory: 'Word Form', text: 'It is very ________ today. (sun -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'sunny'}, {id: 'B', text: 'sunnier'}], correctAnswer: 'A' },
  { id: 47, category: 'VOCABULARY', subcategory: 'Word Form', text: 'Smoking is ________ to your health. (harm -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'harmful'}, {id: 'B', text: 'harmless'}], correctAnswer: 'A' },
  { id: 48, category: 'VOCABULARY', subcategory: 'Word Form', text: 'Tet is a ________ festival in Vietnam. (tradition -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'traditional'}, {id: 'B', text: 'tradition'}], correctAnswer: 'A' },

  // 17. Word Form: -ed vs -ing
  { id: 49, category: 'VOCABULARY', subcategory: 'Word Form', text: 'The film was very ________. (bore -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'bored'}, {id: 'B', text: 'boring'}], correctAnswer: 'B' },
  { id: 50, category: 'VOCABULARY', subcategory: 'Word Form', text: 'I was ________ with the ending of the movie. (disappoint -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'disappointing'}, {id: 'B', text: 'disappointed'}], correctAnswer: 'B' },
  { id: 51, category: 'VOCABULARY', subcategory: 'Word Form', text: 'She felt ________ when she heard the news. (shock -> ...)', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'shocking'}, {id: 'B', text: 'shock'}, {id: 'C', text: 'shocked'}], correctAnswer: 'C' },

  // 18. Synonyms
  { id: 52, category: 'VOCABULARY', subcategory: 'Synonyms', text: '"Famous" gần nghĩa nhất với:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Unknown'}, {id: 'B', text: 'Well-known'}, {id: 'C', text: 'Bored'}], correctAnswer: 'B' },
  { id: 53, category: 'VOCABULARY', subcategory: 'Synonyms', text: '"Fantastic" gần nghĩa nhất với:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Wonderful'}, {id: 'B', text: 'Bad'}, {id: 'C', text: 'Sad'}], correctAnswer: 'A' },
  { id: 54, category: 'VOCABULARY', subcategory: 'Synonyms', text: '"Huge" gần nghĩa nhất với:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Small'}, {id: 'B', text: 'Tiny'}, {id: 'C', text: 'Very big'}], correctAnswer: 'C' },

  // 19. Antonyms
  { id: 55, category: 'VOCABULARY', subcategory: 'Antonyms', text: '"Dangerous" trái nghĩa với:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Safe'}, {id: 'B', text: 'Risk'}, {id: 'C', text: 'Noisy'}], correctAnswer: 'A' },
  { id: 56, category: 'VOCABULARY', subcategory: 'Antonyms', text: '"Expensive" trái nghĩa với:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Cheap'}, {id: 'B', text: 'Rich'}, {id: 'C', text: 'Costly'}], correctAnswer: 'A' },
  { id: 57, category: 'VOCABULARY', subcategory: 'Antonyms', text: '"Short" (distance) trái nghĩa với:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Near'}, {id: 'B', text: 'Long'}, {id: 'C', text: 'Brief'}], correctAnswer: 'B' },

  // 20. Signs & Energy
  { id: 58, category: 'VOCABULARY', subcategory: 'Signs', text: 'Biển báo hình tròn viền đỏ, nền trắng, có số 60 ở giữa nghĩa là:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Speed limit'}, {id: 'B', text: 'No parking'}], correctAnswer: 'A' },
  { id: 59, category: 'VOCABULARY', subcategory: 'Energy', text: 'Năng lượng sinh ra từ nước gọi là:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Wind energy'}, {id: 'B', text: 'Hydro energy'}, {id: 'C', text: 'Solar energy'}], correctAnswer: 'B' },
  { id: 60, category: 'VOCABULARY', subcategory: 'Signs', text: 'Biển báo hình tam giác viền đỏ, có hình trẻ em đi qua nghĩa là:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'School ahead'}, {id: 'B', text: 'Hospital ahead'}], correctAnswer: 'A' },

  // 21. Anagrams
  { id: 61, category: 'VOCABULARY', subcategory: 'Anagrams', text: 'Sắp xếp các chữ cái thành từ có nghĩa: c/y/c/l/e', type: QuestionType.TEXT_INPUT, correctAnswer: 'cycle' },
  { id: 62, category: 'VOCABULARY', subcategory: 'Anagrams', text: 'Sắp xếp các chữ cái thành từ có nghĩa: n/u/c/l/e/a/r', type: QuestionType.TEXT_INPUT, correctAnswer: 'nuclear' },
  { id: 63, category: 'VOCABULARY', subcategory: 'Anagrams', text: 'Sắp xếp các chữ cái thành từ có nghĩa: h/o/r/r/o/r', type: QuestionType.TEXT_INPUT, correctAnswer: 'horror' },

  // 22. Prepositions
  { id: 64, category: 'VOCABULARY', subcategory: 'Prepositions', text: 'She is interested ________ learning English.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'on'}, {id: 'B', text: 'in'}, {id: 'C', text: 'at'}], correctAnswer: 'B' },
  { id: 65, category: 'VOCABULARY', subcategory: 'Prepositions', text: 'Da Lat is famous ________ its flowers.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'for'}, {id: 'B', text: 'with'}, {id: 'C', text: 'about'}], correctAnswer: 'A' },
  { id: 66, category: 'VOCABULARY', subcategory: 'Prepositions', text: 'Are you scared ________ ghosts?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'of'}, {id: 'B', text: 'in'}, {id: 'C', text: 'for'}], correctAnswer: 'A' },

  // 23. Sorting
  { id: 67, category: 'VOCABULARY', subcategory: 'Topic Sorting', text: 'Nhóm nào sau đây chỉ nói về Phim ảnh?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Plot, Director, Actor'}, {id: 'B', text: 'Bus, Ticket, Pilot'}], correctAnswer: 'A' },
  { id: 68, category: 'VOCABULARY', subcategory: 'Topic Sorting', text: 'Nhóm nào sau đây là Nhiên liệu hóa thạch (Fossil fuels)?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Coal, Oil, Natural Gas'}, {id: 'B', text: 'Solar, Wind, Hydro'}], correctAnswer: 'A' },
  { id: 69, category: 'VOCABULARY', subcategory: 'Topic Sorting', text: 'Nhóm nào sau đây là Lễ hội?', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Easter, Christmas, Diwali'}, {id: 'B', text: 'Comedy, Sci-fi, Horror'}], correctAnswer: 'A' },

  // 24. Adverbs
  { id: 70, category: 'VOCABULARY', subcategory: 'Adverbs', text: 'She sings very ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'good'}, {id: 'B', text: 'well'}, {id: 'C', text: 'goodly'}], correctAnswer: 'B' },
  { id: 71, category: 'VOCABULARY', subcategory: 'Adverbs', text: 'He drives ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'fast'}, {id: 'B', text: 'fastly'}, {id: 'C', text: 'fasten'}], correctAnswer: 'A' },
  { id: 72, category: 'VOCABULARY', subcategory: 'Adverbs', text: 'The turtle walks ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'slow'}, {id: 'B', text: 'slowly'}, {id: 'C', text: 'slower'}], correctAnswer: 'B' },

  // 25. Vehicles
  { id: 73, category: 'VOCABULARY', subcategory: 'Vehicles', text: 'A ________ travels on water.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'car'}, {id: 'B', text: 'ship'}, {id: 'C', text: 'plane'}], correctAnswer: 'B' },
  { id: 74, category: 'VOCABULARY', subcategory: 'Vehicles', text: 'A ________ travels underwater.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'submarine'}, {id: 'B', text: 'boat'}, {id: 'C', text: 'train'}], correctAnswer: 'A' },
  { id: 75, category: 'VOCABULARY', subcategory: 'Vehicles', text: 'In the future, we might travel in a flying ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'car'}, {id: 'B', text: 'bicycle'}, {id: 'C', text: 'walker'}], correctAnswer: 'A' },

  // 26. Traffic Signs
  { id: 76, category: 'VOCABULARY', subcategory: 'Signs', text: '"No parking" means:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'You can park here'}, {id: 'B', text: 'You cannot park here.'}], correctAnswer: 'B' },
  { id: 77, category: 'VOCABULARY', subcategory: 'Signs', text: '"No left turn" means:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'You must turn left'}, {id: 'B', text: 'You cannot turn left.'}], correctAnswer: 'B' },
  { id: 78, category: 'VOCABULARY', subcategory: 'Signs', text: '"Traffic lights ahead" is usually a:', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Warning sign (triangle)'}, {id: 'B', text: 'Prohibition sign (circle)'}], correctAnswer: 'A' },

  // 27. Distance
  { id: 79, category: 'VOCABULARY', subcategory: 'Distance', text: 'It is about 5 ________ from my house to school.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'kilograms'}, {id: 'B', text: 'kilometers'}, {id: 'C', text: 'liters'}], correctAnswer: 'B' },
  { id: 80, category: 'VOCABULARY', subcategory: 'Distance', text: '"How ________ is it from Hanoi to Hue?"', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'far'}, {id: 'B', text: 'long'}, {id: 'C', text: 'much'}], correctAnswer: 'A' },
  { id: 81, category: 'VOCABULARY', subcategory: 'Distance', text: 'My school is ________ to my house, so I walk.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'far'}, {id: 'B', text: 'close'}, {id: 'C', text: 'away'}], correctAnswer: 'B' },

  // 28. Film Genres
  { id: 82, category: 'VOCABULARY', subcategory: 'Genres', text: 'A film that makes you laugh is a ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'comedy'}, {id: 'B', text: 'horror'}, {id: 'C', text: 'drama'}], correctAnswer: 'A' },
  { id: 83, category: 'VOCABULARY', subcategory: 'Genres', text: 'A film about space, robots, and the future is ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'sci-fi'}, {id: 'B', text: 'documentary'}, {id: 'C', text: 'animation'}], correctAnswer: 'A' },
  { id: 84, category: 'VOCABULARY', subcategory: 'Genres', text: 'A film with cartoon characters is called ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'animation'}, {id: 'B', text: 'action'}, {id: 'C', text: 'thriller'}], correctAnswer: 'A' },

  // 29. Festivals
  { id: 85, category: 'VOCABULARY', subcategory: 'Festivals', text: 'Pumpkin lanterns and costumes are for ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Tet'}, {id: 'B', text: 'Halloween'}, {id: 'C', text: 'Easter'}], correctAnswer: 'B' },
  { id: 86, category: 'VOCABULARY', subcategory: 'Festivals', text: 'People often eat ________ cakes during Tet.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'Chung'}, {id: 'B', text: 'Birthday'}, {id: 'C', text: 'Cheese'}], correctAnswer: 'A' },
  { id: 87, category: 'VOCABULARY', subcategory: 'Festivals', text: 'La Tomatina is a festival where people throw ________.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'water'}, {id: 'B', text: 'tomatoes'}, {id: 'C', text: 'flowers'}], correctAnswer: 'B' },

  // 30. Environment
  { id: 88, category: 'VOCABULARY', subcategory: 'Environment', text: 'Using public transport helps ________ your carbon footprint.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'reduce'}, {id: 'B', text: 'increase'}, {id: 'C', text: 'make'}], correctAnswer: 'A' },
  { id: 89, category: 'VOCABULARY', subcategory: 'Environment', text: 'Coal and oil are ________ sources of energy.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'clean'}, {id: 'B', text: 'polluting'}, {id: 'C', text: 'green'}], correctAnswer: 'B' },
  { id: 90, category: 'VOCABULARY', subcategory: 'Environment', text: 'We should use ________ bulbs to save electricity.', type: QuestionType.MULTIPLE_CHOICE, options: [{id: 'A', text: 'low-energy'}, {id: 'B', text: 'high-energy'}, {id: 'C', text: 'hot'}], correctAnswer: 'A' },
];
