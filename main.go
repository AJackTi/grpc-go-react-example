package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"

	usersv1 "github.com/AJackTi/grpc-go-react-example/gen/proto/users/v1"
	"github.com/AJackTi/grpc-go-react-example/users"
)

//go:embed dist
var frontend embed.FS

func main() {
	gs := grpc.NewServer()
	usersv1.RegisterUserServiceServer(gs, &users.UserService{})
	wrappedServer := grpcweb.WrapServer(gs)

	http.Handle("/api/", http.StripPrefix("/api/", wrappedServer))
	disFs, err := fs.Sub(frontend, "dist")
	if err != nil {
		log.Fatal(err)
	}
	http.Handle("/", http.FileServer(http.FS(disFs)))

	log.Println("Serving on http://0.0.0.0:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
