'use client';

import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StructuredData from './StructuredData';

const faqData = [
  {
    question: "Какое время заезда и выезда в отеле?",
    answer: "Время заезда: с 14:00. Время выезда: до 12:00. При необходимости раннего заезда или позднего выезда, пожалуйста, уточните возможность у администратора."
  },
  {
    question: "Есть ли в отеле Wi-Fi?",
    answer: "Да, во всех номерах и общественных зонах отеля предоставляется бесплатный высокоскоростной Wi-Fi."
  },
  {
    question: "Предоставляется ли парковка?",
    answer: "Да, у нас есть бесплатная охраняемая парковка для гостей отеля."
  },
  {
    question: "Можно ли отменить бронирование?",
    answer: "Да, отмена бронирования возможна. Условия отмены зависят от тарифа. Детали уточняйте при бронировании."
  },
  {
    question: "Есть ли в отеле ресторан?",
    answer: "Да, в нашем отеле работает ресторан, где подаются блюда европейской и русской кухни. Завтрак включен в стоимость проживания."
  },
  {
    question: "Принимаются ли к оплате карты?",
    answer: "Да, мы принимаем к оплате наличные и банковские карты основных платежных систем."
  },
  {
    question: "Можно ли разместиться с домашними животными?",
    answer: "К сожалению, размещение с домашними животными в нашем отеле не предусмотрено."
  },
  {
    question: "Есть ли кондиционер в номерах?",
    answer: "Да, все номера оборудованы кондиционерами для комфортного пребывания в любое время года."
  }
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <StructuredData type="faq" data={faqData} />
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Часто задаваемые вопросы
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          Ответы на наиболее популярные вопросы наших гостей
        </Typography>
        
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `panel${index}`} 
              onChange={handleChange(`panel${index}`)}
              sx={{ mb: 2 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
}
