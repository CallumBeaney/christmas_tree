# To view animation, DL python3 & run this from shell script:
import os,time;from random import randint,sample
seed=rnd(12,20);present='\u7530';s,n,o,w,y=' ','_','|','#','*'
def bud(len, chr): return chr*len  
def snow(branch):
  for i in sorted(sample(range(len(branch)),int(seed/randint(3,6)))):
    if branch[i]==present or branch[i]==n:continue
    else: branch=branch[:i]+y+branch[i+1:]
  return branch
def grow(rows): 
  time.sleep(1.0);os.system('cls'if os.name=='nt'else'clear')
  for row in range(rows):
    if row>=rows-2:twig=bud(rows,s if row==rows-2 else n)+o
    else:twig=bud(rows-row,s)+bud(row,w)+(o if row!=0 else w)
    print(snow(twig+(twig[::-1][:3]+present+twig[::-1][5:] if row==rows-1 else twig[::-1])))

    
while True: grow(12)