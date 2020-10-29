const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Masukkan judul halaman'
  },
  {
    type: 'input',
    name: 'slug',
    message: 'Masukkan slug halaman',
    validate(input) {
      const done = this.async();
      if (fs.existsSync(path.join(process.cwd(), 'pages', `${input}.mdx`))) {
        done(`File dengan nama ${input}.mdx sudah ada!`);
        return;
      }

      done(null, true);
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Masukkan deskripsi halaman'
  },
  {
    type: 'confirm',
    name: 'draft',
    message: 'Simpan di draft?'
  }
];

inquirer
  .prompt(questions)
  .then(answer => {
    const template = fs.readFileSync(path.join(process.cwd(), 'utils', 'templates', 'page.ejs'));
    const data = ejs.render(template.toString(), {
      title: answer.title,
      draft: answer.draft,
      description: answer.description
    });
    fs.writeFileSync(path.join(process.cwd(), 'pages', `${answer.slug}.mdx`), data);
  })
  .catch(err => {
    // eslint-disable-next-line
    console.log('Ada yang salah saat membuat halaman baru!', err);
  });
