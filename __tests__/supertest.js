const request = require('supertest');
const server = 'http://localhost:3000';
const { exec } = require('child_process');
const awaitExec = require('await-exec');
const path = require('path');


//testing route integration

/* 
***************MUST HAVE DOCKER RUNNING TO RUN THESE TESTS *****************
**Please make sure that the cadvisor and prometheus containers are running**
***********Tests will fail if these containers aren't booted up*************

Start cadvisor commands
OS: docker run \
--volume=/:/rootfs:ro \
--volume=/var/run:/var/run:ro \
--volume=/sys:/sys:ro \
--volume=/var/lib/docker/:/var/lib/docker:ro \
--volume=/dev/disk/:/dev/disk:ro \
--publish=9101:8080 \
--detach=true \
--name=cadvisor \
--privileged \
--device=/dev/kmsg \
gcr.io/cadvisor/cadvisor:v0.44.1-test ;

linux and win32:
docker run --volume=/sys:/sys:ro --volume=/cgroup:/cgroup:ro --publish=9101:8080 --detach=true --name=cadvisor gcr.io/cadvisor/cadvisor:latest

Start prometheus command:

`docker run --name prometheus -p 9090:9090 -d -v \
${path.resolve(__dirname, '../assets/prometheus.yaml')}:/etc/prometheus/prometheus.yml \
prom/prometheus ;


*/

describe('Route integration', () => {
    //Before we run tests, we need a container to test our endpoints on
    beforeAll(async () => { 
        exec('docker run -d --name test_container -p 80:80 docker/getting-started');
    });
      //after the tests complete, remove the container
    afterAll(() => {
        exec('docker rm --force test_container');
    });
    
    //Testing metrics routes
    describe('/metrics', () =>{
        describe('POST', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .post('/metrics')
                .send({
                query: 'container_memory_usage_bytes',
                secondsPassed: 90,
                interval: 1,
                })
                .expect('Content-Type', /application\/json/)
                .expect(200)
                
            });
            
        });
    });

    describe('/metrics/cpu', () =>{
        describe('POST', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .post('/metrics/cpu')
                .send({
                query: 'rate(container_cpu_user_seconds_total{id=~"/docker.*"}[30s])*100',
                secondsPassed: 90,
                interval: 1,
                })
                .expect('Content-Type', /application\/json/)
                .expect(200)
            });     
        });
    });

    //Testing container functionality
    describe('/containers', () => {
        describe('/container/exit', () => {
            it('responds with a 200 status and a text/html content type', () => {
                return request(server)
                .post('/container/exit')
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })

        describe('container/stop', () => {
            jest.setTimeout(20000)
            it('responds with a 200 status and a text/html content type', () => {
                return request(server)
                .post('/container/stop')
                .send({
                name: 'test_container'
                })
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })

        describe('/container/start', () => {
            it('responds with a 200 status and a text/html content type', () => {
                return request(server)
                .post('/container/start')
                .send({
                name: 'test_container'
                })
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })

        describe('/container/pause', () => {
            it('responds with a 200 status and a text/html content type', () => {
                return request(server)
                .post('/container/pause')
                .send({
                name: 'test_container'
                })
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })

        describe('/container/unpause', () => {
            it('responds with a 200 status and a text/html content type', () => {
                return request(server)
                .post('/container/unpause')
                .send({
                name: 'test_container'
                })
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })
    })
});