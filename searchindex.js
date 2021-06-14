Object.assign(window.search, {"doc_urls":["create_nginx_ingress.html#create-nginx-ingress-with-traefik-in-m3s"],"index":{"documentStore":{"docInfo":{"0":{"body":234,"breadcrumbs":9,"title":5}},"docs":{"0":{"body":"With these example we will create a nginx Webserver and publish the Website with the traefik 2.x ingress. kubectl create -f nginx.yaml apiVersion: apps/v1\nkind: Deployment\nmetadata: name: nginx-deployment namespace: default labels: app: nginx\nspec: selector: matchLabels: app: nginx replicas: 1 template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx:1.14.2 ports: - name: web containerPort: 80 kubectl create -f nginx-service.yaml apiVersion: v1\nkind: Service\nmetadata: name: nginx-service spec: ports: - protocol: TCP name: web port: 80 selector: app: nginx kubectl create -f nginx-traefik.yaml apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata: name: nginx-traefik namespace: default\nspec: entryPoints: - web routes: - match: Host(`your.example.com`) kind: Rule services: - name: nginx-service port: 80 In the traefik Dasboard we will see our new rule: image_2021-06-14-13-05-55 Now we can try to access nginx via traefik. First, we have to now the port of the k3sagent. dig _k3sagent._tcp.k3s.slave.mesos SRV ; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.3 <<>> _k3sagent._tcp.k3s.slave.mesos SRV\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 58547\n;; flags: qr aa rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1 ;; QUESTION SECTION:\n;_k3sagent._tcp.k3s.slave.mesos.\tIN\tSRV ;; ANSWER SECTION:\n_k3sagent._tcp.k3s.slave.mesos.\t60 IN\tSRV\t0 1 31866 k3sagent-cuoph-s1.k3s.slave.mesos.\n_k3sagent._tcp.k3s.slave.mesos.\t60 IN\tSRV\t0 1 31865 k3sagent-cuoph-s1.k3s.slave.mesos. ;; ADDITIONAL SECTION:\nk3sagent-cuoph-s1.k3s.slave.mesos. 60 IN A\t192.168.1.20 ;; Query time: 4 msec\n;; SERVER: 127.0.0.1#53(127.0.0.1)\n;; WHEN: Mon Jun 14 11:00:01 UTC 2021\n;; MSG SIZE rcvd: 170 As we can see, the port is 31865 for the port 80 and 31866 for the port 443. The agents IP is 192.168.1.20. If we have multiple k3sagents, we will see all IP adresses. These IP adress we have to add into the /etc/hosts file. 192.168.1.20 your.example.com Now we can access nginx: curl -vvv your.example.com:31865","breadcrumbs":"Create NGINX ingress with traefik » Create NGINX ingress with traefik in M3S","id":"0","title":"Create NGINX ingress with traefik in M3S"}},"length":1,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"6":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"1":{"1":{":":{"0":{"0":{":":{"0":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"7":{".":{"0":{".":{"0":{".":{"1":{"#":{"5":{"3":{"(":{"1":{"2":{"7":{".":{"0":{".":{"0":{".":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":1,"docs":{"0":{"tf":1.0}}},"4":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"7":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"9":{"2":{".":{"1":{"6":{"8":{".":{"1":{".":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":2.23606797749979}}},"2":{".":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"0":{"2":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{".":{"df":0,"docs":{},"p":{"2":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"7":{"_":{"9":{".":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"3":{"1":{"8":{"6":{"5":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"5":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"8":{"5":{"4":{"7":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"0":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"8":{"0":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}},"9":{".":{"1":{"1":{".":{"4":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"_":{"df":0,"docs":{},"k":{"3":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"_":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"k":{"3":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"a":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"0":{"tf":1.0}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"p":{"df":1,"docs":{"0":{"tf":2.0}},"s":{"/":{"df":0,"docs":{},"v":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"s":{"b":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"t":{"c":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"(":{"`":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"_":{"2":{"0":{"2":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}},"p":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"k":{"3":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"m":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"a":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":2.6457513110645907}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},":":{"1":{".":{"1":{"4":{".":{"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":3.872983346207417}}}}}},"o":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"w":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"p":{"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.8284271247461903}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"r":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"v":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"1":{".":{"df":0,"docs":{},"k":{"3":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"c":{"df":1,"docs":{"0":{"tf":2.0}},"e":{".":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"c":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"v":{"1":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"a":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"v":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{":":{"3":{"1":{"8":{"6":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"0":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"6":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"1":{"1":{":":{"0":{"0":{":":{"0":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"7":{".":{"0":{".":{"0":{".":{"1":{"#":{"5":{"3":{"(":{"1":{"2":{"7":{".":{"0":{".":{"0":{".":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":1,"docs":{"0":{"tf":1.0}}},"4":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"7":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"9":{"2":{".":{"1":{"6":{"8":{".":{"1":{".":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":2.23606797749979}}},"2":{".":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"0":{"2":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{".":{"df":0,"docs":{},"p":{"2":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"7":{"_":{"9":{".":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"3":{"1":{"8":{"6":{"5":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"5":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"8":{"5":{"4":{"7":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"0":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"8":{"0":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}},"9":{".":{"1":{"1":{".":{"4":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"_":{"df":0,"docs":{},"k":{"3":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"_":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"k":{"3":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"a":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"0":{"tf":1.0}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"p":{"df":1,"docs":{"0":{"tf":2.0}},"s":{"/":{"df":0,"docs":{},"v":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.6457513110645907}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"s":{"b":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"t":{"c":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"(":{"`":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"_":{"2":{"0":{"2":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":2.0}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}},"p":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"k":{"3":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"m":{"3":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"a":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":2.6457513110645907}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},":":{"1":{".":{"1":{"4":{".":{"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":4.123105625617661}}}}}},"o":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"w":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"p":{"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.8284271247461903}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"r":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"v":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"1":{".":{"df":0,"docs":{},"k":{"3":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"c":{"df":1,"docs":{"0":{"tf":2.0}},"e":{".":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"c":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"v":{"1":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"a":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"0":{"tf":2.6457513110645907}}}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"v":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{":":{"3":{"1":{"8":{"6":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"m":{"3":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});