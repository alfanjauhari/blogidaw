const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Masukkan judul artikel'
	},
	{
		type: 'input',
		name: 'slug',
		message: 'Masukkan slug artikel',
		validate: function (input) {
			const done = this.async();
			if(fs.existsSync(path.join(process.cwd(), 'contents', 'posts', `${input}.md`))) {
				done(`File dengan nama ${input}.md sudah ada!`);
				return;
			}

			done(null, true);
		}
	},
	{
		type: 'input',
		name: 'description',
		message: 'Masukkan deskripsi artikel'
	},
	{
		type: 'confirm',
		name: 'draft',
		message: 'Simpan di draft?'
	}
];

inquirer.prompt(questions).then(answer => {
	const template = fs.readFileSync(path.join(process.cwd(), 'utils', 'templates', 'post.ejs'));
	const data = ejs.render(template.toString(), {
		title: answer.title,
		draft: answer.draft,
		description: answer.description,
		date: new Date().toISOString()
	});
	fs.writeFileSync(path.join(process.cwd(), 'contents', 'posts', `${answer.slug}.md`), data);
}).catch(err => {
	console.log('Ada yang salah saat membuat artikel baru!', err);
});