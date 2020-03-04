const HEIGHT = 49, WIDTH = 57;

function tableCreate() {
    var body = document.getElementById("code"),
        tbl = document.createElement('table');
    tbl.setAttribute('id', 'ascii_table')
    for (var y = 0; y < HEIGHT; y++) {
        var tr = tbl.insertRow();
        for (var x = 0; x < WIDTH; x++) {
            var td = tr.insertCell();
            td.appendChild(document.createTextNode('_'));
            td.setAttribute('id', y.toString() + ';' + x.toString() );
        }
    }
    body.appendChild(tbl);
}

function tick() {
    
    var ascii_display = [];

    ascii_display.push(
        "┌────────────────────────────────────────────┬──────────┐",
        "│       ┬   ┌───┐   ┌───┐   ┬───┐            │          │",
        "│       │   │       │   │   │   │            │          │",
        "│       │   │ ──┬   │   │   ├─┬─┘            ├ ─ ─  ─ ─ ┤",
        "│       │   │   │   │   │   │ └─┐            │ @Mutilar │",
        "│       ┴ . └───┘ . └───┘ . ┴   ┴ .          │ v.1.0.0a │",
        "├───────────┬────────────────────┬───────────┼──────────┤",
        "│ MAIN MENU │ ~ ~ FLOOR PLAN ~ ~ │ CONFIGURE │ SETTINGS │",
        "├───────────┴────────────────────┴───────────┴──────────┤",
        "│                                                       │",
        "│  INTERACT with your DIGITAL HABITAT via TOUCH INPUT:  │",
        "│   * TOGGLE various LIGHTS, SWITCHES, and PERIPHERALS  │",
        "│   * VIEW SENSOR DATA for informed ECO-DECISION-MAKING │",
        "│                                                       │",
        "├────────────────────────────────┬───────┬───────┬──────┤",
        "│┌───────────┬──────────┐┌───────┴───────┴───────┴─────┐│",
        "││           │┌────────┐││ ┌────┐                 ┌───┐││",
        "││           ││        │││ │    │                 │   │││",
        "││           │└────────┘││ │    │                 └───┘││",
        "││           │          ││ └────┘                      ││",
        "││           │          ├┤                             ││",
        "││           │          ││                             ││",
        "│├───────────┘          ││                       ┌─────┤│",
        "││┌──────────┐          ││                       │     ││",
        "│││          │          ├┤                       │     ││",
        "││└──────────┘          ││                       │     ││",
        "││                      │├──┐                    │     ││",
        "││                      ││  │                    │     ││",
        "│├──────────────────────┤│  │                    │     ││",
        "││                      ││  │                    │     ││",
        "││                      │├──┘              ┌─────┘     ││",
        "│├──────────────────────┘└┐                │           ││",    
        "│├──────────────────┐┌───┐│                │           ││",
        "│├──────────┐┌─────┐││A/C││          ┌─────┴───────────┤│",
        "│├┐         ││ WSH ││└───┘│          │       ┌──────┐  ││",
        "│├┘         ││ DRY ││┌────┘          │       │ o  o │  ││",
        "│├──────────┘└─────┘├┤               │       │ O  O │  ││",    
        "│├────┐             ││               └───────┴──────┴──┤│",
        "││┌──┐│             ││                                 ││",
        "│├┼  ││             ││                                 ││",
        "││└──┘│     ┌───────┴┤                                 ││",
        "│├────┘     ├──┐┌───┬┤            ┌┬──────────┬─────┬──┤│",    
        "│├───┐      │  ││   ││            ││   ┌────┐ │ FRG │  ││",
        "│├┬──┘      │  ││   ││            ││   │[][]│ │ FRZ │  ││",
        "│└──────────┴──┘└───┴┴─┬───────┬──┴┴───┴────┴─┴─────┴──┘│",
        "├──────────────────────┴───────┴────────────────────────┤",
        "│ LOG: read Sensor(id='switch1').state;                 │",
        "│      write Light(id='light1').on = 1;                 │",
        "└───────────────────────────────────────────────────────┘"
    )
    ascii_display.forEach(function (line, y) {
        line.split('').forEach(function (char, x) {
            document.getElementById(y.toString() + ';' + x.toString()).innerText = char;
        });
    });
    var ts = new Date();
    ts.toLocaleTimeString().split(" ")[0].split('').forEach(function (char, x) {
        document.getElementById('1;' + (x+47).toString()).innerText = char;
    });
    ts.toLocaleDateString().split('').forEach(function (char, x) {
        document.getElementById('2;' + (x+47).toString()).innerText = char;
    }) ;   
   

    
}



window.onload = function () {
    tableCreate();
    setInterval(tick, 1000);
    

 
    // for (line in ascii_display) {
    //     for (char in line) {

    //     }
    // }

    // document.getElementById("console").innerHTML = ascii_display.join('<br>');
   
    // \\  ┬ ┌───┐ ┌───┐ ┬───┐    ┬
    // \\  │ │     │   │ │   │    │
    // \\  │ │ ──┬ │   │ ├─┬─┘    │
    // \\  │ │   │ │   │ │ └─┐    ┬   │
    // \\  ┴ └───┘ └───┘ ┴   ┴ 

    // ┌───┐ ┬     ┬───┐ ┬───┐ ┬───┐ ┬───┐ 
    // │   │ │     │     │   │ │     │   │ 
    // ├───┤ │     ├──   ├─┬─┘ ├──   │   │ 
    // │   │ │     │     │ └─┐ │     │   │ 
    // ┴   ┴ ┴───┘ ┴     ┴   ┴ ┴───┘ ┴───┘ 
    //     class Thin6x6Font(Font):
    //     height = 6
    //     data = [u"""
    // 000000111111222222333333444444555555666666777777888888999999''
    // ┌───┐   ┐   ┌───┐ ┌───┐    ┐  ┌───  ┌───  ┌───┐ ┌───┐ ┌───┐ │
    // │   │   │       │     │ ┌  │  │     │         │ │   │ │   │
    // │ / │   │   ┌───┘    ─┤ └──┼─ └───┐ ├───┐     ┼ ├───┤ └───┤
    // │   │   │   │         │    │      │ │   │     │ │   │     │
    // └───┘   ┴   └───  └───┘    ┴   ───┘ └───┘     ┴ └───┘  ───┘
    // """, r'''
    // !!   """######$$$$$$%%%%%%&&&&&&((()))******++++++
    // │    ││  ┌ ┌  ┌─┼─┐ ┌┐  /  ┌─┐   / \
    // │       ─┼─┼─ │ │   └┘ /   │ │  │   │  \ /    │
    // │        │ │  └─┼─┐   /   ┌─\┘  │   │ ──X── ──┼──
    // │       ─┼─┼─   │ │  / ┌┐ │  \, │   │  / \    │
    // .        ┘ ┘  └─┼─┘ /  └┘ └───\  \ /
    // ''', r"""
    // ,,-----..//////::;;<<<<=====>>>>??????@@@@@@
    //              /                  ┌───┐ ┌───┐
    //             /  . .   / ──── \       │ │┌──┤
    //   ────     /        /        \    ┌─┘ ││  │
    //           /    . ,  \  ────  /    │   │└──┘
    // ,      . /           \      /     .   └───┘
    // """, r"""
    // [[\\\\\\]]^^^____``{{||}}~~~~~~
    // ┌ \     ┐ /\     \ ┌ │ ┐
    // │  \    │          │ │ │ ┌─┐
    // │   \   │          ┤ │ ├   └─┘
    // │    \  │          │ │ │
    // └     \ ┘    ────  └ │ ┘
    // """, u"""
    // AAAAAABBBBBBCCCCCCDDDDDDEEEEEEFFFFFFGGGGGGHHHHHHIIJJJJJJ
    // ┌───┐ ┬───┐ ┌───┐ ┬───┐ ┬───┐ ┬───┐ ┌───┐ ┬   ┬ ┬     ┬
    // │   │ │   │ │     │   │ │     │     │     │   │ │     │
    // ├───┤ ├───┤ │     │   │ ├──   ├──   │ ──┬ ├───┤ │     │
    // │   │ │   │ │     │   │ │     │     │   │ │   │ │ ┬   │
    // ┴   ┴ ┴───┘ └───┘ ┴───┘ ┴───┘ ┴     └───┘ ┴   ┴ ┴ └───┘
    // """, u"""
    // KKKKKKLLLLLLMMMMMMNNNNNNOOOOOOPPPPPPQQQQQQRRRRRRSSSSSS
    // ┬   ┬ ┬     ┌─┬─┐ ┬─┐ ┬ ┌───┐ ┬───┐ ┌───┐ ┬───┐ ┌───┐
    // │ ┌─┘ │     │ │ │ │ │ │ │   │ │   │ │   │ │   │ │
    // ├─┴┐  │     │ │ │ │ │ │ │   │ ├───┘ │   │ ├─┬─┘ └───┐
    // │  └┐ │     │   │ │ │ │ │   │ │     │  ┐│ │ └─┐     │
    // ┴   ┴ ┴───┘ ┴   ┴ ┴ └─┴ └───┘ ┴     └──┼┘ ┴   ┴ └───┘
    //                                        └
    // """, u"""
    // TTTTTTUUUUUUVVVVVVWWWWWWXXXXXXYYYYYYZZZZZZ
    // ┌─┬─┐ ┬   ┬ ┬   ┬ ┬   ┬ ┬   ┬ ┬   ┬ ┌───┐
    //   │   │   │ │   │ │   │ └┐ ┌┘ │   │   ┌─┘
    //   │   │   │ │   │ │ │ │  ├─┤  └─┬─┘  ┌┘
    //   │   │   │ └┐ ┌┘ │ │ │ ┌┘ └┐   │   ┌┘
    //   ┴   └───┘  └─┘  └─┴─┘ ┴   ┴   ┴   └───┘
    // """, u"""
    // aaaaaabbbbbbccccccddddddeeeeeefffgggggghhhhhhiijjj
    //                               ┌─┐
    //       │               │       │        │     .  .
    // ┌───┐ ├───┐ ┌───┐ ┌───┤ ┌───┐ ┼  ┌───┐ ├───┐ ┐  ┐
    // ┌───┤ │   │ │     │   │ ├───┘ │  │   │ │   │ │  │
    // └───┴ └───┘ └───┘ └───┘ └───┘ ┴  └───┤ ┴   ┴ ┴  │
    //                                  └───┘         ─┘
    // """, u"""
    // kkkkkkllmmmmmmnnnnnnooooooppppppqqqqqqrrrrrssssss
    // │     │
    // │ ┌─  │ ┬─┬─┐ ┬───┐ ┌───┐ ┌───┐ ┌───┐ ┬──┐ ┌───┐
    // ├─┴┐  │ │ │ │ │   │ │   │ │   │ │   │ │    └───┐
    // ┴  └─ └ ┴   ┴ ┴   ┴ └───┘ ├───┘ └───┤ ┴    └───┘
    //                           │         │
    // """, u"""
    // ttttuuuuuuvvvvvvwwwwwwxxxxxxyyyyyyzzzzzz
    //  │
    // ─┼─ ┬   ┬ ┬   ┬ ┬   ┬ ─┐ ┌─ ┬   ┬ ────┬
    //  │  │   │ └┐ ┌┘ │ │ │  ├─┤  │   │ ┌───┘
    //  └─ └───┴  └─┘  └─┴─┘ ─┘ └─ └───┤ ┴────
    //                             └───┘
    // """]

    // document.getElementById("get-news").onclick = function () {
    // Get news through AJAX
    // };
}