JEKYLL_ENV=production bundle exec jekyll build 
#rsync -av --delete -e 'ssh -i ~/.ssh/nopass' ~/astro/_site/* sshacs@icass2.rsync.upload.akamai.com:/350001/astro
