// import * as async from "async";
// import { expect } from "chai";
// import * as request from "supertest";
// import * as server from "./main";

// describe("main.ts file", () => {

//     /* -------------------------- CLASSE ARTIST ------------------------------------------------- */
//     // Test #1: List all artists
//     it("Return 200 when successfully listing artists", (done) => {
//         request(server)
//             .get("/artists")
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("array");
//                 expect(res.body[0]).to.be.an("object");
//                 expect(res.body[0]).to.include.all.keys("id", "name", "albums");
//             })
//             .end(done);
//     });

//     // Test #2: Post valid artist
//     it("Return 200 when successfully creating a new artist", (done) => {
//         request(server)
//             .post("/artists")
//             .send({
//                 name: "First",
//                 albums: [],
//             })

//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Artista adicionado com sucesso.");

//             })
//             .end(done);
//     });

//     // Test #3: Post artist with invalid name
//     it("Return 400 when creating an artist with invalid name", (done) => {
//         request(server)
//             .post("/artists")
//             .send({
//                 name: 2,
//                 albums: [],
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar artista: Invalid artist name");
//             })
//             .end(done);
//     });

//     // Test #4: Post artist with invalid albums array
//     it("Return 400 when creating an artist with invalid albums", (done) => {
//         request(server)
//             .post("/artists")
//             .send({
//                 name: "Artist 2",
//                 albums: "albums",
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar artista: Invalid albums");
//             })
//             .end(done);
//     });

//     // Test #5: Post artist that already exists
//     it("Return 400 when creating an artist that already exists", (done) => {
//         request(server)
//             .post("/artists")
//             .send({
//                 name: "First",
//                 albums: [],
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar artista: Artist already exists");
//             })
//             .end(done);
//     });

//     // Test #6: Update an artist
//     it("Return 200 when successfully updating an artist", (done) => {
//         request(server)
//             .put("/artists/1")
//             .send({
//                 name: "FirstNewName",
//                 albums: [],
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Artista atualizado com sucesso.");
//             })
//             .end(done);
//     });

//     // Test #7: Delete artist
//     it("Return 200 when deleting an artist successfully", (done) => {
//         request(server)
//             .delete("/artists/1")
//             .send({
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Artista removido com sucesso.");
//             })
//             .end(done);
//     });

//     /* -------------------------- CLASSE ALBUM ------------------------------------------------- */
//     // Test #8: List all albums
//     it("Return 200 when successfully listing an album", (done) => {
//         request(server)
//             .get("/albums")
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("array");
//                 expect(res.body[0]).to.be.an("object");
//                 expect(res.body[0]).to.include.all.keys("id", "artist", "name", "date", "songs");
//             })
//             .end(done);
//     });

//     // Test #9: Post valid album
//     it("Return 200 when successfully creating a new album", (done) => {
//         request(server)
//             .post("/albums")
//             .send({
//                 artist: 0,
//                 name: "First Album",
//                 date: "1999",
//                 songs: [],
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Album adicionado com sucesso.");
//             })
//             .end(done);
//     });

//     // Test #10: Post album with invalid name
//     it("Return 400 when creating an album with invalid name", (done) => {
//         request(server)
//             .post("/albums")
//             .send({
//                 artist: 0,
//                 name: 3,
//                 date: "1995",
//                 songs: [],
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar album: Invalid album name");
//             })
//             .end(done);
//     });

//     // Test #11: Post album with invalid date
//     it("Return 400 when creating an album with invalid date", (done) => {
//         request(server)
//             .post("/albums")
//             .send({
//                 artist: 0,
//                 name: "Album 2",
//                 date: "Two thousand and one",
//                 songs: [],
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar album: Invalid album date");
//             })
//             .end(done);
//     });

//     // Test #12: Post album with invalid array of songs
//     it("Return 400 when creating an album with invalid array of songs", (done) => {
//         request(server)
//             .post("/albums")
//             .send({
//                 artist: 0,
//                 name: "Album 2",
//                 date: "1995",
//                 songs: "arrayofsongs",
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar album: Invalid array of songs");
//             })
//             .end(done);
//     });

//     // Test #13: Post an album that already exists
//     it("Return 400 when creating an album that already exists", (done) => {
//         request(server)
//             .post("/albums")
//             .send({
//                 artist: 0,
//                 name: "First Album",
//                 date: "2000",
//                 songs: [],
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar album: Album already exists");
//             })
//             .end(done);
//     });

//     // Test #14: Delete album an all its content
//     it("Return 200 when updating an album succesfully", (done) => {
//         request(server)
//             .put("/albums/1")
//             .send({
//                 artist: 0,
//                 name: "Second Album",
//                 date: "2001",
//                 songs: []
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Album atualizado com sucesso.");
//             })
//             .end(done);
//     });

//     // Test #15: Delete album an all its content
//     it("Return 200 when deleting an album succesfully", (done) => {
//         request(server)
//             .delete("/albums/1")
//             .send({
//                 artist: 0,
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Álbum removido com sucesso.");
//             })
//             .end(done);
//     });


//     /* --------------------------- CLASSE MUSIC ------------------------------------------------- */
//     // Test #16: List all musics
//     it("Return 200 when successfully listing a music", (done) => {
//         request(server)
//             .get("/musics")
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("array");
//                 expect(res.body[0]).to.be.an("object");
//                 expect(res.body[0]).to.include.all.keys("id", "album", "name", "duration", "price");
//             })
//             .end(done);
//     });

//     // Test #17: Post valid music
//     it("Return 200 when successfully creating a new music", (done) => {
//         request(server)
//             .post("/musics")
//             .send({
//                 album: 0,
//                 name: "First Music",
//                 duration: 212,
//                 price: 1.99,
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Música adicionada com sucesso.");
//             })
//             .end(done);
//     });

//     // Test #18: Post music with invalid name
//     it("Return 400 when creating music with invalid name", (done) => {
//         request(server)
//             .post("/musics")
//             .send({
//                 album: 0,
//                 name: "",
//                 duration: 12,
//                 price: 1.99
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar música: Invalid music name");

//             })
//             .end(done);
//     });

//     // Test #19: Post music with invalid duration
//     it("Return 400 when creating music with invalid duration", (done) => {
//         request(server)
//             .post("/musics")
//             .send({
//                 album: 0,
//                 name: "Music 2",
//                 duration: "setecentas horas",
//                 price: 1.99
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar música: Invalid music duration");

//             })
//             .end(done);
//     });

//     // Test #20: Post music with invalid price
//     it("Return 400 when creating music with invalid price", (done) => {
//         request(server)
//             .post("/musics")
//             .send({
//                 album: 0,
//                 name: "Music 2",
//                 duration: 122,
//                 price: "um dollar and fifty cents"
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar música: Invalid music price");
//             })
//             .end(done);
//     });

//     // Test #21: Post music that already exists
//     it("Return 400 when creating music that already exists", (done) => {
//         request(server)
//             .post("/musics")
//             .send({
//                 artist: 0,
//                 album: 0,
//                 name: "First Music",
//                 duration: 232,
//                 price: 15.99,
//             })
//             .expect(400)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Erro ao adicionar música: Music already exists");
//             })
//             .end(done);
//     });

//     // Test #22: Update music 
//     it("Return 200 when updating music successfully", (done) => {
//         request(server)
//             .put("/musics/1")
//             .send({
//                 album: 0,
//                 name: "First Music New Name",
//                 duration: 345,
//                 price: 0.99,
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Música atualizada com sucesso.");
//             })
//             .end(done);
//     });

//     // Test #23: Delete music
//     it("Return 200 when deleting a music successfully", (done) => {
//         request(server)
//             .delete("/musics/1")
//             .send({
//                 album: 0,
//             })
//             .expect(200)
//             .expect((res: any) => {
//                 expect(res.body).to.be.an("string");
//                 expect(res.body).to.be.equal("Música removida com sucesso.");
//             })
//             .end(done);
//     });

// });
