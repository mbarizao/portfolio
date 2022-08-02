import { Button, Container, Content, Drawer, InterView, Text, Toolbar, VCard } from 'components';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Theme from 'styles/theme';

const Interviews = ({toggleTheme}) => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);
    const [interviewVisible, setInterviewVisible] = useState({
        interview1: false,
        interview2: false,
        interview3: false,
    });

    const getInterview = {
        seeduc: () => {
            setInterviewVisible({
                interview1: !interviewVisible.interview1,
                interview2: false,
                interview3: false,
            })
        },
        serranews: () => {
            setInterviewVisible({
                interview1: false,
                interview2: !interviewVisible.interview2,
                interview3: false,
            })
        },
        roquetepinto: () => {
            setInterviewVisible({
                interview1: false,
                interview2: false,
                interview3: !interviewVisible.interview3,
            })
        },
    }

    const toggleDrawer = () => {
        setDrawerVisibility(!drawerVisibility);
    }

    return (
        <Container>
            <Toolbar.View >
                <a href="/"><img src={require(`assets/images/${Theme.getName() === 'light' ? 'logo-dark.png' : 'logo-light.png'}`)} width={100} alt={'Logo'} /></a>
                <Toolbar.Actions>
                    <a href="/#home">Início</a>
                    <a href="/#about">Sobre</a>
                    <a href="/#skills">Habilidades</a>
                    <a href="/#certifications">Certificações</a>
                    <a href="/#experiences">Experiências</a>
                    <a href="/entrevistas">Entrevistas</a>
                    <a href="/#contact">Contato</a>
                    <span href="#">
                        {
                            Theme.getName() === 'light' ?
                                <FaIcons.FaMoon size={36} onClick={toggleTheme} /> :
                                <FaIcons.FaSun size={36} onClick={toggleTheme} />
                        }
                    </span>
                </Toolbar.Actions>
                <Toolbar.Button onClick={toggleDrawer}>
                    <AiIcons.AiOutlineMenu size={28} />
                </Toolbar.Button>
            </Toolbar.View>

            {drawerVisibility &&
                <Drawer.View>
                    <Drawer.Item onClick={toggleDrawer} href={'/#home'}>Início</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#about'}>Sobre</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#skills'}>Habilidades</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#certifications'}>Certificações</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#experiences'}>Experiências</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/entrevistas'}>Entrevistas</Drawer.Item>
                    <Drawer.Item onClick={toggleDrawer} href={'/#contact'}>Contato</Drawer.Item>
                </Drawer.View>
            }

            <Content >
                <main >
                    <Row as={'section'} id={'interviews'}>
                        <Col>
                            <Text.SessionTitle>Minhas entrevistas</Text.SessionTitle>
                            <Row className={'mx-3 mt-3'}>
                                <VCard
                                    icon={'https://www.svgrepo.com/show/24342/book.svg'}
                                    title={'Seeduc'}
                                    onClick={() => getInterview['seeduc']()}
                                />
                                <VCard
                                    icon={'https://www.svgrepo.com/show/49867/newspaper.svg'}
                                    title={'SerraNews'}
                                    onClick={() => getInterview['serranews']()}
                                />
                                <VCard
                                    icon={'https://www.svgrepo.com/show/33109/radio.svg'}
                                    title={'Rádio Roquette Pinto - 94.1 FM'}
                                    onClick={() => getInterview['roquetepinto']()}
                                />
                            </Row>
                            <Row className={'mt-3'}>
                                <InterView name={'Seeduc'} visible={interviewVisible.interview1}>
                                    <Row>
                                        <img
                                            src={require('assets/images/interview1.png')}
                                            width={'100%'}
                                            alt={'imagem-entrevista'} />
                                    </Row>
                                    <Row className={'mt-4'}>
                                        <Text.Span>
                                            O estudante Marllon Barizão, recém-formado do Ensino Médio do Colégio Estadual Conde de Nova Friburgo, em Cantagalo, desenvolveu um aplicativo para atender e integrar alunos e professores dessa unidade escolar. A ideia inicial dele era criar uma ferramenta que estimulasse a leitura e funcionasse como uma biblioteca virtual, com espaço para postagens sugerindo livros e autores. Com o surgimento das aulas remotas, Marllon percebeu que poderia oferecer outros conteúdos que auxiliassem os alunos. Agora, o projeto do aplicativo pedagógico cresceu e, além da sugestão de livros para leitura extraclasse, resenhas e comentários, disponibiliza um mural onde o aluno encontra informações e notícias gerais, dicas para o Enem e acesso rápido ao boletim escolar. Tem também o QUIZ, onde os professores podem dinamizar suas aulas com jogos de perguntas e respostas, um espaço para o Grêmio divulgar suas reuniões e eventos e um editor de textos para anotações. Localização e fotos internas e externas da escola também estão disponíveis. Familiarizado bem cedo com os jogos virtuais, ele começou, aos 11 anos, a modificar os seus games, acrescentando mais carros ou participantes. – Meu interesse aumentou e acabei descobrindo um programa que desenvolvia aplicativos para celular. Aprendi pesquisando e fazendo. Foram dois anos descobrindo novas possibilidades. O jovem desenvolvedor, de 18 anos, conta que não esperava que o projeto fosse tão bem recebido. – Os professores gostaram da ideia e os alunos já estão baixando e acessando. Acho que a experiência facilita a comunicação dando dicas para os alunos e informando aos pais. O projeto foi testado com ajuda dos integrantes do Grêmio, professores e apoio da equipe diretiva da escola. Leandra Estephane Montechiari, diretora geral da unidade, considera o trabalho uma importante ferramenta de interação. - É uma ferramenta tecnológica que contribuirá com o trabalho do professor e provocará um maior interesse dos alunos, uma vez que foi construída por um colega e contou com a participação de toda comunidade escolar. Esse ano, Marllon começa o seu trabalho como Jovem Aprendiz em uma indústria local. Criar novos aplicativos também continua nos seus planos. – Já tenho uma nova ideia para jogos, mas, por enquanto, é segredo –, brinca.
                                        </Text.Span>
                                    </Row>
                                    <Row className={'mx-2 mt-4'}>
                                        <Text.Link href={'https://www.seeduc.rj.gov.br/not%C3%ADcias'}>www.seeduc.rj.gov.br [06/04/2021] →</Text.Link>
                                    </Row>
                                </InterView>
                                <InterView name={'SerraNews'} visible={interviewVisible.interview2}>
                                    <Row>
                                        <img
                                            src={require('assets/images/interview2.png')}
                                            width={'100%'}
                                            alt={'imagem-entrevista'} />
                                    </Row>
                                    <Row className={'mt-4'}>
                                        <Text.Span>
                                            O aluno Marllon Barizão, do distrito de Euclidelândia, em Cantagalo, na Região Serrana do Rio, desenvolveu um app pedagógico que ajuda professores do Colégio Estadual Conde de Nova Friburgo na educação dos alunos e auxilia no novo modelo de ensino do Estado. Quem entrou em contato com o Serra News para divulgar esse trabalho foi a diretora do colégio, Leandra Estephane. “Em meio a toda essa pandemia e a busca por adequar as ferramentas tecnológicas ao novo modelo de ensino, o Colégio Estadual Conde de Nova Friburgo conta agora com essa ferramenta para enriquecer e facilitar o processo de aprendizagem de nossos alunos” – disse ela a nossa redação. O app pedagógico – CNF App – conta com: um mural para publicação de informações gerais e dicas do Enem; biblioteca para resenhas e indicações de livros; informações sobre o Grêmio Estudantil; jogo de quiz usado como ferramenta pedagógica (gamificação); perfil próprio e personalizável; boletim online do Estado e armazenamento de matrícula; além de contar também com um editor de texto para anotações. Marllon Barizão têm 18 anos e é natural de Euclidelândia – terra de Euclides da Cunha. Apesar do app pedagógico ser exclusivo para o Colégio Estadual Conde de Nova Friburgo, a iniciativa oriunda de um trabalho na escola, é comemorada pelos professores e diretora. “O aplicativo representa uma maneira de interação entre escola, alunos e responsáveis, mais um meio tecnológico que soma conhecimentos” – contou a Leandra.
                                        </Text.Span>
                                    </Row>
                                    <Row className={'mx-2 mt-4'}>
                                        <Text.Link href={'https://www.serranewsrj.com.br/2021/03/aluno-de-cantagalo-desenvolve-app-pedagogico-que-ajuda-professores.html'}>www.serranewsrj.com.br [31/03/2021] →</Text.Link>
                                    </Row>
                                </InterView>
                                <InterView name={'Rádio Roquette Pinto - 94.1 FM'} visible={interviewVisible.interview3}>
                                    <Row className={'mt-4'}>
                                        <audio controls preload>
                                            <source src={require('assets/audio/interview3.mp3')} type="audio/mpeg" />
                                            Seu navegador não suporta áudio em HTML5, atualize-o.
                                        </audio>
                                    </Row>
                                </InterView>
                            </Row>
                        </Col>
                    </Row>

                </main>
            </Content>

        </Container>
    );
}

export default Interviews;