document.getElementById('coverLetterForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const position = document.getElementById('position').value.trim();
    const company = document.getElementById('company').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const summary = document.getElementById('summary').value.trim();
  
    const letter = `
  Dear Hiring Manager,
  
  My name is ${name}, and I am writing to express my keen interest in the ${position} position at ${company}. With a strong background in ${skills}, I bring a passion for innovation and a commitment to excellence.
  
  ${summary}
  
  I am confident that my skills and experience align well with your needs. Thank you for considering my application. I look forward to the opportunity to contribute to ${company}'s success.
  
  Sincerely,
  ${name}
    `.trim();
  
    document.getElementById('letter').textContent = letter;
    document.getElementById('output').style.display = 'block';
  });
  