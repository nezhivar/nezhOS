import { program } from 'commander';
import { execSync } from 'child_process';

const updateLocalDotfiles = () => {
    program
        .action(() => {
            execSync(`
                cp -R .zshrc ~/.zshrc
                cp -R .gitignore_global ~/.gitignore_global
                cp -R .vimrc ~/.vimrc
            `);
        })
        .configureOutput({
            writeOut: (str) => console.log(`[OUT] ${str}`),
            writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
        });

    program.parse();
}

export default updateLocalDotfiles;