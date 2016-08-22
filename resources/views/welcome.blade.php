<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
{{--        <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap/dist/css/bootstrap.css')}}">--}}
        <link rel="stylesheet" type="text/css" href="{{url('css/main.css')}}">
        <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">

    </head>
    <body>
        <div class="container">
            <h1>@{{title}}</h1>
            <br>
            <h3>Hallo: @{{name}}</h3>
            <input name="name" v-model="name" class="form-control" />

            <br />
            <h1>My Agenda (@{{toDoCount}})</h1>
            {{--<pre>
                @{{$data|json}}
            </pre>--}}
            {{--
            v-bind = di class completed digunakan untuk binding class tertentu jika dalam kondisi tertentu,
                    contoh dibawah binding jika data di todos dengan field complited bernilai true,
                    maka akan ditampilkan linethrougt (sesuai class css yg kita buat)
            --}}

            <ul class="list-group" v-if="todo.length > 0">
                <li class="list-group-item"
                    v-for="todos in todo |orderBy 'agenda' 1"
                    v-bind:class ="{'completed':todos.completed}">
                    @{{ todos.agenda }}
                    <button class="btn btn-warning btn-xs pull-right"
                            v-on:click="deleteTodo(todos)">Delete</button>
                    <button class="btn-xs pull-right margin-right-10"
                            v-on:click="todoCompleted(todos)"
                            v-bind:class="{'btn btn-success':todos.completed, 'btn btn-danger':!todos.completed}">
                        @{{todos.completed ? 'Completed' : 'Pending'}}
                    </button>
                </li>
            </ul>
            <div v-else>
                <p><b>Tidak ada agenda yang tersimpan</b></p>
            </div>

            <form v-on:submit.prevent="addNewAgenda(MyAgenda)">
                <div class="form-group" >
                    <input type="text" class="form-control"
                           v-model="MyAgenda.agenda"
                           placeholder="Masukan agenda baru"

                    />
                    <button class="btn btn-info">Add Agenda</button>
                </div>
            </form>

        </div>

    <script src="{{elixir('js/main.js')}}"></script>
    </body>
</html>
