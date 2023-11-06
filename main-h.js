const meteor = document.querySelectorAll('.meteor')
  const meteor1 = document.querySelector('#m_1');
  const meteor2 = document.querySelector('#m_2');
  const meteor3 = document.querySelector('#m_3');
  const meteor4 = document.querySelector('#m_4');
  const h1 = document.querySelector('#h1');
  const h2 = document.querySelector('#h2');
  const h3 = document.querySelector('#h3');
  const h4 = document.querySelector('#h4');
  addEventListener('mousemove', e => {
      //마우스의 실시간 좌표확인
      let x = e.clientX;
      let y = e.clientY;
      console.log(x,y)
      meteor1.style.transform = `translate(${-x / -50}px, ${y / 70 + 10}px) rotate(15deg)`
      meteor2.style.transform = `translate(${-x / -50}px, ${y / 70 + 10}px) rotate(15deg)`
      meteor3.style.transform = `translate(${-x / -50}px, ${y / 70 + 10}px) rotate(15deg)`
      meteor4.style.transform = `translate(${x / -50}px, ${y / 70 + 10}px)  rotate(15deg)`
      h1.style.transform = `translate(${-x / -50}px, ${y / 70 + 10}px)`
      h2.style.transform = `translate(${30 - x / 60}px, ${40 - y / 50}px)`
      h3.style.transform = `translate(${30 - x / 60}px, ${40 - y / 50}px)`
      h4.style.transform = `translate(${30 - x / 60}px, ${y / 50}px)`
    })

    const h_bg = document.querySelector('#pc_bg')

    addEventListener('scroll', () => {
      h_bg.style.transform = `translateY(-${scrollY / 8}px)`
    })