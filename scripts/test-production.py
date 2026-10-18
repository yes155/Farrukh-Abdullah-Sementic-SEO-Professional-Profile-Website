#!/usr/bin/env python3
"""Start the built app only for HTTP integration tests and always stop it."""
import os,subprocess,tempfile,time,urllib.request,pathlib,sys
port=os.environ.get('SEO_TEST_PORT','4318')
with tempfile.TemporaryFile(mode='w+') as log:
 server=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','-H','127.0.0.1','-p',port],stdout=log,stderr=subprocess.STDOUT)
 try:
  for attempt in range(40):
   if server.poll() is not None:raise RuntimeError('Production test server exited')
   try:
    with urllib.request.urlopen(f'http://127.0.0.1:{port}/robots.txt',timeout=1):break
   except Exception:time.sleep(.25)
  else:raise RuntimeError('Production test server did not become ready')
  subprocess.run([sys.executable,'scripts/verify-seo.py','--base-url',f'http://127.0.0.1:{port}'],check=True)
 except Exception:
  log.seek(0);print(log.read(),file=sys.stderr);raise
 finally:
  server.terminate();server.wait(timeout=5)
