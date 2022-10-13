function distancia (posX, posY) {
    var cH = posX - 200;
    var cV = posY - 200;
    
    var d = Math.sqrt(cH*cH + cV*cV);
    
    return d;
}

for (var x = 1; x < 400; x += 2) {
    for (var y = 1; y < 400; y += 2) {
        if (distancia(x, y) < 198 && distancia(x, y) > 155) {
            noStroke();
            // primeiro quadrante
            if (x > 200 && y < 200) {
                // parte inferior
                if (x - 200 > 200 - y) {
                    fill (161, 58, 103);
                }
                // parte superior
                else {
                    fill (216, 51, 82);
                }
            }
            // segundo quadrante
            else if (x < 200 && y < 200) {
                // parte superior
                if (x - 200 > y - 200) {
                    fill (249, 134, 92);
                }
                // parte inferior
                else {
                    fill (250, 207, 51);
                }
            }
            // terceiro quadrante
            else if (x < 200 && y > 200) {
                // parte inferior
                if (y - 200 > 200 - x) {
                    fill (68, 151, 101);
                }
                // parte superior
                else {
                    fill (169, 189, 53);
                }
            }
            // quatro quadrante
            else if (x > 200 && y > 200) {
                // parte superior
                if (x > y) {
                    fill (131, 51, 135);
                }
                // parte inferior
                else {
                    fill (51, 51, 158);
                }
            }
            ellipse (x, y, 1, 1);
        }
    }
}


// Cor
for (var x = 1; x < 400; x ++) {
    for (var y = 1; y < 400; y ++) {
        if (distancia(x, y) < 150 && distancia(x, y) > 105) {
            noStroke();
            // primeiro quadrante
            if (x > 200 && y < 200) {
                // parte inferior
                if (x - 200 > 200 - y) {
                    fill (138, 9, 65);
                }
                // parte superior
                else {
                    fill (206, 0, 39);
                }
            }
            // segundo quadrante
            else if (x < 200 && y < 200) {
                // parte superior
                if (x - 200 > y - 200) {
                    fill (248, 104, 51);
                }
                // parte inferior
                else {
                    fill (249, 195, 0);
                }
            }
            // terceiro quadrante
            else if (x < 200 && y > 200) {
                // parte inferior
                if (y - 200 > 200 - x) {
                    fill (21, 125, 62);
                }
                // parte superior
                else {
                    fill (147, 173, 3);
                }
            }
            // quatro quadrante
            else if (x > 200 && y > 200) {
                // parte superior
                if (x > y) {
                    fill (100, 0, 105);
                }
                // parte inferior
                else {
                    fill (0, 0, 134);
                }
            }
            ellipse (x, y, 1, 1);
        }
    }
}

// Preto
for (var x = 1; x < 400; x ++) {
    for (var y = 1; y < 400; y ++) {
        if (distancia(x, y) < 100) {
            noStroke();
            // primeiro quadrante
            if (x > 200 && y < 200) {
                // parte inferior
                if (x - 200 > 200 - y) {
                    fill (97, 6, 46);
                }
                // parte superior
                else {
                    fill (145, 0, 27);
                }
            }
            // segundo quadrante
            else if (x < 200 && y < 200) {
                // parte superior
                if (x - 200 > y - 200) {
                    fill (174, 73, 36);
                }
                // parte inferior
                else {
                    fill (175, 137, 0);
                }
            }
            // terceiro quadrante
            else if (x < 200 && y > 200) {
                // parte inferior
                if (y - 200 > 200 - x) {
                    fill (15, 88, 44);
                }
                // parte superior
                else {
                    fill (103, 121, 2);
                }
            }
            // quatro quadrante
            else if (x > 200 && y > 200) {
                // parte superior
                if (x > y) {
                    fill (70, 0, 74);
                }
                // parte inferior
                else {
                    fill (0, 0, 94);
                }
            }
            ellipse (x, y, 1, 1);
            ellipse (x, y, 1, 1);
        }
    }
}

stroke(255, 255, 255);
strokeWeight(10);

line (200, 0, 200, 400);
line (0, 200, 400, 200);
line (400, 400, 0, 0);
line (400, 0, 0, 400);

fill(255);
ellipse (200, 200, 25, 25);
