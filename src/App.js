import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white p-5">
        <h1>AllIdeaBridge</h1>
        <p>세상의 모든 아이디어를 연결하는 다리</p>
      </header>

      <main className="container mt-5">
        <section id="about" className="mb-5">
          <h2>회사 소개</h2>
          <p>AllIdeaBridge는 세상의 모든 아이디어를 연결하는 다리가 되겠다는 비전으로 설립되었습니다. 저희는 기술의 복잡함 때문에 소외되는 사람이 없어야 한다고 믿습니다. 앱 개발을 통해 저희는 복잡한 최신 기술을 누구나 쉽게 이해하고 사용할 수 있는 형태로 변환하여 제공합니다. 저희의 목표는 기술과 사람 사이의 간극을 메워, 모든 사람이 기술 발전의 혜택을 동등하게 누릴 수 있는 세상을 만드는 것입니다.</p>
        </section>

        <section id="services" className="mb-5">
          <h2>우리의 서비스</h2>
          <p>저희는 스마트폰 사용에 어려움을 느끼는 분들을 위한 맞춤형 애플리케이션을 개발합니다. 예를 들어, 여러 단계로 이루어진 복잡한 금융 거래 과정을 단 한 번의 터치로 해결할 수 있는 앱, 또는 다양한 건강 정보를 한눈에 파악하고 관리할 수 있는 건강 관리 앱 등을들 수 있습니다. 저희는 사용자의 입장에서 생각하고, 기술적인 장벽을 허물어 일상생활에 실질적인 도움이 되는 솔루션을 제공하기 위해 노력합니다.</p>
        </section>

        <section id="vision" className="mb-5">
          <h2>우리의 비전</h2>
          <p>AllIdeaBridge의 궁극적인 비전은 기술을 통해 모든 세대가 소통하고 공감할 수 있는 사회를 만드는 것입니다. 저희는 단순히 앱을 개발하는 것을 넘어, 기술 교육 프로그램을 운영하고, 디지털 소외 계층을 위한 커뮤니티를 형성하는 등 사회적 책임을 다하는 기업으로 성장하고자 합니다. 앞으로도 저희는 혁신적인 아이디어를 바탕으로 사람 중심의 기술을 선보이며, 더 나은 미래를 만들어가는 데 기여할 것입니다.</p>
        </section>

        <section id="target" className="mb-5">
          <h2>타겟 고객</h2>
          <p>저희의 주요 고객은 스마트폰의 다양한 기능에 접근하기 어려워하는 모든 분들입니다. 기술의 혜택을 모두가 누릴 수 있도록 돕겠습니다.</p>
        </section>

        <section id="contact" className="mb-5">
          <h2>문의</h2>
          <p>궁금한 내용은 support@allideabridge.com으로 문의주세요.</p>
        </section>
      </main>

      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>&copy; 2025 AllIdeaBridge. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
