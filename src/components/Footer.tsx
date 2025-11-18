'use client';

import {Box, Container, Grid, Typography, Link as MuiLink, IconButton} from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VKIcon from './VKIcon';
import { CONTACTS, SITE_CONFIG, VK_COLORS } from '@/config/contacts';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: (theme) => theme.palette.footer.background,
                color: (theme) => theme.palette.footer.text,
                py: 6,
                mt: 'auto',
                backdropFilter: 'blur(10px)',
                boxShadow: (theme) => theme.palette.footer.shadow,
            }}
            >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom color="inherit">
                            {SITE_CONFIG.name}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}} color="inherit">
                            Современная гостиница в центре Богородска. Комфорт и качественный сервис для наших гостей.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom color="inherit">
                            Навигация
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <MuiLink component={Link} href="/" color="inherit" underline="hover">
                                Главная
                            </MuiLink>
                            <MuiLink component={Link} href="/rooms" color="inherit" underline="hover">
                                Номера
                            </MuiLink>
                            <MuiLink component={Link} href="/services" color="inherit" underline="hover">
                                Услуги
                            </MuiLink>
                            <MuiLink component={Link} href="/contacts" color="inherit" underline="hover">
                                Контакты
                            </MuiLink>
                            <MuiLink component={Link} href="/booking" color="inherit" underline="hover">
                                Бронирование
                            </MuiLink>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom color="inherit">
                            Контакты
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <PhoneIcon fontSize="small" sx={{ color: 'inherit' }}/>
                                <MuiLink
                                    href={CONTACTS.phone.link}
                                    color="inherit"
                                    underline="hover"
                                    sx={{textDecoration: 'none'}}
                                >
                                    <Typography variant="body2" color="inherit">{CONTACTS.phone.display}</Typography>
                                </MuiLink>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <EmailIcon fontSize="small" sx={{ color: 'inherit' }}/>
                                <MuiLink
                                    href={CONTACTS.email.link}
                                    color="inherit"
                                    underline="hover"
                                    sx={{textDecoration: 'none'}}
                                >
                                    <Typography variant="body2" color="inherit">{CONTACTS.email.display}</Typography>
                                </MuiLink>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <LocationOnIcon fontSize="small" sx={{ color: 'inherit' }}/>
                                <Typography variant="body2" color="inherit">{CONTACTS.address.full}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mt: 2}}>
                                <Typography variant="body2" color="inherit">Мы в соцсетях:</Typography>
                                <IconButton
                                    component={Link}
                                    href={CONTACTS.social.vk.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: VK_COLORS.primary,
                                        '&:hover': {
                                            backgroundColor: VK_COLORS.hoverBackground,
                                            color: VK_COLORS.hover,
                                        },
                                        '& svg': {
                                            fill: VK_COLORS.primary,
                                            color: VK_COLORS.primary,
                                        },
                                        '&:hover svg': {
                                            fill: VK_COLORS.hover,
                                            color: VK_COLORS.hover,
                                        },
                                    }}
                                    aria-label={`Мы в ${CONTACTS.social.vk.name}`}
                                >
                                    <VKIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{
                    mt: 4, 
                    pt: 4, 
                    borderTop: (theme) => `1px solid ${theme.palette.footer.border}`
                }}>
                    <Typography variant="body2" align="center" color="inherit">
                        © {new Date().getFullYear()} {SITE_CONFIG.name} Богородск. Все права защищены.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}


