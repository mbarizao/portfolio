import { Button, Container, Content, Text, Toolbar, HCard, VCard, ImageCard, Drawer } from 'components';
import { Row, Col } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

import Lottie from 'react-lottie';
import coding from 'assets/lotties/coding.json'
import contact from 'assets/lotties/contact.json'
import { useEffect, useState } from 'react';
import Firebase from 'services/firebase';
import { withTheme } from 'styled-components';
import Theme from 'styles/theme';

const Home = ({ theme, toggleTheme }) => {
  const [certifications, setCertifications] = useState({});
  const [experiences, setExperiences] = useState({});
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const headerLottie = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const contactLottie = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    Firebase.database.get('certifications').then((response) => {
      if (response.status) {
        return setCertifications(response.data ?? {});
      }
    });

    Firebase.database.get('experiences').then((response) => {
      if (response.status) {
        return setExperiences(response.data ?? {});
      }
    });
  }, []);

  const toggleDrawer = () => {
    setDrawerVisibility(!drawerVisibility);
  }

  return (
    <Container>
      <Toolbar.View fixed>
        <a href="/"><img src={require(`assets/images/${Theme.getName() === 'light' ? 'logo-dark.png' : 'logo-light.png'}`)} width={100} alt={'Logo'} /></a>
        <Toolbar.Actions>
          <a href="/#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#certifications">Certificações</a>
          <a href="#experiences">Experiências</a>
          <a href="#contact">Contato</a>
          <span href="#">
            {
              Theme.getName() === 'light' ?
                <FaIcons.FaMoon size={36} onClick={toggleTheme} /> :
                <FaIcons.FaSun size={36} onClick={toggleTheme} />
            }
          </span>
        </Toolbar.Actions>
        <Toolbar.Button onClick={toggleDrawer}>
          <AiIcons.AiOutlineMenu size={28} color={theme.colors.text} />
        </Toolbar.Button>
      </Toolbar.View>

      {drawerVisibility &&
        <Drawer.View>
          <Drawer.Item onClick={toggleDrawer} href={'/#home'}>Início</Drawer.Item>
          <Drawer.Item onClick={toggleDrawer} href={'/#about'}>Sobre</Drawer.Item>
          <Drawer.Item onClick={toggleDrawer} href={'/#skills'}>Habilidades</Drawer.Item>
          <Drawer.Item onClick={toggleDrawer} href={'/#certifications'}>Certificações</Drawer.Item>
          <Drawer.Item onClick={toggleDrawer} href={'/#experiences'}>Experiências</Drawer.Item>
          <Drawer.Item onClick={toggleDrawer} href={'/#contact'}>Contato</Drawer.Item>
          <Drawer.Item href={'#'}>
            {
              Theme.getName() === 'light' ?
                <FaIcons.FaMoon size={36} onClick={toggleTheme} /> :
                <FaIcons.FaSun size={36} onClick={toggleTheme} />
            }
          </Drawer.Item>
        </Drawer.View>
      }

      <Content>
        <Row style={{ height: '95vh' }}>
          <Col className={'d-flex justify-content-center align-items-center align-items-lg-start align-items-xl-start flex-column'}>
            <Text.Title colored>Olá, eu sou o</Text.Title>
            <Text.Title>Marllon Barizão</Text.Title>
            <Text.Subtitle>Desenvolvedor Front-end</Text.Subtitle>
            <a href="#contact"><Button.Default className="mt-3">SOLICITE UM ORÇAMENTO</Button.Default></a>
          </Col>
          <Col className="d-none d-lg-block d-xl-block">
            <Lottie isClickToPauseDisabled={true} options={headerLottie}
              height={'85%'}
              width={'85%'} />
          </Col>
        </Row>

        <main>
          <Row as={'section'} id={'about'}>
            <Col>
              <Text.SessionTitle>Sobre mim</Text.SessionTitle>
              <Text.Span>Meu nome é Marllon Barizão, tenho 20 anos,
                nascido na região serrana do Rio de Janeiro,
                iniciei meu aprendizado em programação criando modificações para jogos,
                após esse período aprendi Batch Script e comecei desenvolver algorítimos para automação no ambiente Windows e até mesmo,
                alguns jogos simples com inputs de texto.
                Já em 2016 comecei meu aprendizado em Java para android e assim criei vários aplicativos como Freelancer pelo Sketchware,
                um aplicativo que me possibilitava desenvolver outros aplicativos, aumentando assim meu conhecimento e paixão pela área.
                Em 2020 iniciei o projeto CNF App em parceria a escola na qual estudava,
                para desenvolver um app em que aproximasse os alunos à escola por um meio digital. Após o lançamento,
                fui convidado a realizar várias entrevistas a rede estadual de ensino, jornais da região e até mesmo uma rádio.
                Em 2021, fui contratado como Jovem Aprendiz em Processos Administrativos pela LafargeHolcim,
                onde adquiri muita experiência, atualmente,
                trabalho na empresa BrasilNET Telecom como desenvolvedor Front-End e estou cursando Sistemas de Informação, pelo CEFET (Centro Federal Tecnológico Celso Suckow da Fonseca).</Text.Span>
            </Col>
            <Col className={'d-flex justify-content-center align-items-center col-12 col-lg-6 col-xl-6 mt-3 mt-lg-0 mt-xl-0'}>
              <img
                src={require('assets/images/profile.jpg')}
                width={'80%'}
                style={{ borderRadius: '100%' }}
                alt="profile" />
            </Col>
          </Row>

          <Row as={'section'} id={'skills'} className={'my-5'}>
            <Col>
              <Text.SessionTitle>Habilidades</Text.SessionTitle>
              <Row className={'mt-3'}>
                <HCard
                  icon={<AiIcons.AiOutlineExperiment size={64} />}
                  title={'Freelancer'}
                  text={'Com projetos concluídos e entregues para grandes empresas'} />
                <HCard
                  icon={<AiIcons.AiOutlineRise size={64} />}
                  title={'Criatividade e inovação'}
                  text={'Usando a criatividade ao desenvolver aplicações e inovando cada vêz mais'} />
                <HCard
                  icon={<AiIcons.AiOutlineBulb size={64} />}
                  title={'Resolução de problemas'}
                  text={'Utilizando as melhores técnicas de programação em sua aplicação'} />
                <HCard
                  icon={<AiIcons.AiOutlineCodepen size={64} />}
                  title={'Criação de aplicações intuitivas e bonitas'}
                  text={'Com designs simples e bonitos para melhor utilização'} />
              </Row>
            </Col>
          </Row>

          <Row as={'section'} id={'certifications'} className={'my-5'}>
            <Col>
              <Text.SessionTitle>Certificações</Text.SessionTitle>
              <Row className={'d-flex justify-content-center mt-3'}>
                {
                  Object.keys(certifications).length > 0 &&
                  Object.keys(certifications).map((item, key) => {
                    const value = certifications[item];
                    return (
                      <VCard
                        key={key}
                        icon={value.icon}
                        title={value.title}
                        text={value.schoolName} />
                    );
                  })
                }
              </Row>
            </Col>
          </Row>

          <Row as={'section'} id={'experiences'} className={'my-5'}>
            <Col>
              <Text.SessionTitle>Experiências</Text.SessionTitle>
              <Row className={'d-flex justify-content-center mt-3'}>
                {
                  Object.keys(experiences).length > 0 &&
                  Object.keys(experiences).map((item, key) => {
                    const value = experiences[item];
                    return (
                      <ImageCard
                        key={key}
                        onClick={() => {
                          window.location.href = value.link;
                        }}
                        image={value.icon}
                        title={value.title}
                      />
                    );
                  })
                }
              </Row>
            </Col>
          </Row>

          <Row as={'section'} id={'contact'} className={'my-5'}>
            <Col>
              <Text.SessionTitle>Entrar em contato</Text.SessionTitle>
              <Row className={'mt-3'}>
                <Text.Span>
                  Você está procurando sites ou aplicações simples e rápidas para seu negócio?
                  Algum tipo de consulta ou fazer alguma pergunta?
                  Sinta-se à vontade para entrar em contato.
                  Eu farei o meu melhor para responder de volta.
                  As maneiras mais rápidas de entrar em contato comigo são pelos meios abaixo.
                </Text.Span>
              </Row>
              <Row>
                <Col>
                  <a target={'_blank'} href={'mailto:sevendaymobile@gmail.com'}><Button.Default className="mt-3">sevendaymobile@gmail.com</Button.Default></a>
                </Col>
                <Col>
                  <a target={'_blank'} href={'https://api.whatsapp.com/send?phone=5522992848636&text=Ol%C3%A1%20Marllon%2C%20preciso%20de%20sua%20aten%C3%A7%C3%A3o.'}><Button.Default className="mt-3">(22) 99284-8636</Button.Default></a>
                </Col>
              </Row>
            </Col>
            <Col className={'d-none d-lg-block d-xl-block'}>
              <Row className={'mt-1'}>
                <Lottie isClickToPauseDisabled={true} options={contactLottie}
                  height={'80%'}
                  width={'80%'} />
              </Row>
            </Col>
          </Row>
        </main>
        <footer>
          <Row>
            <Col className={'d-flex justify-content-center mt-5'}>
              <a target={'_blank'} href={'https://github.com/mbarizao'} title={'GitHub Marllon Barizão'}><AiIcons.AiFillGithub size={42} color={theme.colors.text} /></a>
              <a target={'_blank'} href={'https://www.linkedin.com/in/marllonbarizao/'} title={'LinkedIn Marllon Barizão'}><AiIcons.AiFillLinkedin size={42} color={theme.colors.text} /></a>
            </Col>
          </Row>
        </footer>
      </Content>
    </Container>
  );
}

export default withTheme(Home);
