const request = require('supertest');
const server = 'http://localhost:3000';
const { exec } = require('child_process');
const awaitExec = require('await-exec');
const { doesNotMatch } = require('assert');

//testing route integration

//run a conditional check before each test to make sure Docker Daemon is running
// const result = exec('docker ps', (error, stdout, stderr) => {
//     console.log('stdout', stdout);
//     console.log('reg error', error);
//     console.log('stdedrr', stderr)
// });
//endpoints to test:  /metrics, /metrics/cpu

//const itif = (condition) => condition ? it : it.skip;


    
beforeAll(async (done) => { 
    const result = exec('docker ps', (err, stdout, stderr) => {
        if (err) {
            done(err);
        }
    });
});


describe('Route integration', () => {
      
    

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

});