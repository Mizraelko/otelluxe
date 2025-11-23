import { Container, Box, Typography, Grid, Card, CardContent, Link, IconButton, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import VKIcon from '@/components/VKIcon';
import Breadcrumbs from '@/components/Breadcrumbs';
import YandexMap from '@/components/YandexMap';
import StructuredData from '@/components/StructuredData';
import { CONTACTS, VK_COLORS } from '@/config/contacts';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata('contacts');

export default function ContactsPage() {
  const breadcrumbs = [
    { name: 'Главная', url: 'https://hotelluxbg.ru' },
    { name: 'Контакты', url: 'https://hotelluxbg.ru/contacts' }
  ];

  const breadcrumbItems = [
    { label: 'Контакты', current: true }
  ];

  const faqItems = [
    {
      question: 'Во сколько время заезда и выезда?',
      answer: 'Заселение доступно после 00:00, выезд — до 00:00. По предварительному согласованию возможен ранний заезд или поздний выезд.',
    },
    {
      question: 'Есть ли парковка для гостей?',
      answer: 'Да, у отеля есть бесплатная охраняемая парковка с видеонаблюдением. Места доступны гостям круглосуточно.',
    },
    {
      question: 'Как связаться с администратором ночью?',
      answer: 'Стойка регистрации работает 24/7. Позвоните по номеру +7 (987) 757-83-23 — администратор ответит в любое время.',
    },
  ];

  const travelSteps = [
    {
      title: '🚗 На автомобиле',
      description:
        'От трассы М7 поверните на Богородск, следуйте по главной улице до центра города. Отель находится рядом с центральной площадью и виден с дороги.',
    },
    {
      title: '🚌 Общественным транспортом',
      description:
        'От автовокзала Богородска автобусы №5 и №12 следуют до остановки «Центр». От остановки всего 2 минуты пешком по улице Ленина до входа в отель.',
    },
    {
      title: '🚂 От ж/д вокзала',
      description:
        'Расстояние от вокзала — 3 км. Можно доехать на такси за 10 минут или воспользоваться городским автобусом. Также предоставляем трансфер по предварительной заявке.',
    },
    {
      title: '✈️ От аэропорта Нижний Новгород',
      description:
        'Аэропорт Стригино находится в 45 км. Дорога на такси занимает 40 минут. При необходимости организуем платный трансфер прямо к отелю.',
    },
  ];

  const howToStructuredData = {
    name: 'Как добраться до отеля "Люкс" в Богородске',
    description: 'Пошаговые инструкции по основным маршрутам: автомобиль, общественный транспорт, железная дорога и аэропорт.',
    steps: travelSteps.map(({ title, description }) => ({
      name: title,
      text: description,
    })),
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <StructuredData type="breadcrumb" data={breadcrumbs} />
        <StructuredData type="faq" data={faqItems} />
        <StructuredData type="howTo" data={howToStructuredData} />
        <Breadcrumbs items={breadcrumbItems} />
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Контакты
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          Мы всегда рады ответить на ваши вопросы и помочь с бронированием
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <PhoneIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Телефон
                </Typography>
                <Link 
                  href={CONTACTS.phone.link} 
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <Typography variant="body1" color="primary.main" fontWeight="bold">
                    {CONTACTS.phone.display}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Звонки принимаются круглосуточно
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <EmailIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Link 
                  href={CONTACTS.email.link} 
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <Typography variant="body1" color="primary.main" fontWeight="bold">
                    {CONTACTS.email.display}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Ответим в течение 24 часов
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Адрес
                </Typography>
                <Typography variant="body1" color="primary.main" fontWeight="bold">
                  {CONTACTS.address.city}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {CONTACTS.address.street}, {CONTACTS.address.building}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <AccessTimeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Режим работы
                </Typography>
                <Typography variant="body1" color="primary.main" fontWeight="bold">
                  Круглосуточно
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Заезд после 00:00, Выезд до 00:00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Мы в социальных сетях
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <IconButton
              component={Link}
              href={CONTACTS.social.vk.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: VK_COLORS.primary,
                color: 'white',
                '&:hover': {
                  bgcolor: VK_COLORS.hover,
                },
                width: 64,
                height: 64,
                '& svg': {
                  width: '32px',
                  height: '32px',
                },
              }}
              aria-label={`Мы в ${CONTACTS.social.vk.name}`}
            >
              <VKIcon 
                width={32} 
                height={32}
                style={{ fill: 'white', color: 'white' }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography component="h2" variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
            Как нас найти
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 2,
            }}
          >
            <Button
              variant="contained"
              color="inherit"
              href="https://yandex.ru/maps/20036/bogorodsk/?ll=43.520823%2C56.106022&mode=routes&rtext=~56.106022%2C43.520823&rtt=auto&ruri=~&z=17"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<AltRouteIcon />}
              sx={{
                borderRadius: 999,
                bgcolor: 'background.paper',
                color: 'text.primary',
                boxShadow: 1,
                textTransform: 'none',
                px: 3,
                py: 1,
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'action.hover',
                  boxShadow: 2,
                },
              }}
            >
              Как доехать
            </Button>
          </Box>
          <YandexMap />
        </Box>

        <Box sx={{ p: 4, bgcolor: 'background.default', borderRadius: 2, mb: 6 }}>
          <Typography component="h3" variant="h5" gutterBottom>
            Как добраться
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {travelSteps.map((step) => (
              <Grid item xs={12} md={6} key={step.title}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', height: '100%' }}>
                  <Typography component="h4" variant="h6" gutterBottom color="primary.main">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            align="center"
            sx={{ mb: 4 }}
          >
            Отзывы гостей
          </Typography>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 560,
              mx: 'auto',
              height: { xs: 400, md: 600 },
              overflow: 'hidden',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <Box
              component="iframe"
              src="https://yandex.ru/maps-reviews-widget/1742070480?comments"
              sx={{
                width: '100%',
                height: '100%',
                border: 0,
                borderRadius: 2,
              }}
              loading="lazy"
              title="Отзывы об отеле «Люкс» на Яндекс Картах"
            />

            <Box
              component="a"
              href="https://yandex.ru/maps/org/lyuks/1742070480/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: 'absolute',
                bottom: 8,
                left: 0,
                width: '100%',
                textAlign: 'center',
                px: 2,
                typography: 'caption',
                color: 'text.secondary',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Люкс на карте Богородска — Яндекс Карты
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography component="h2" variant="h4" gutterBottom align="center">
            Частые вопросы
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
            Сохраняем ответы на самые популярные вопросы гостей. Если не нашли нужный — позвоните нам, мы всегда на связи.
          </Typography>
          {faqItems.map((faq, index) => (
            <Accordion
              key={faq.question}
              disableGutters
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                mb: 2,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-content-${index}`} id={`faq-header-${index}`}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}


