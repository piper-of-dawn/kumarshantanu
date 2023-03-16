use std::collections::{HashSet};
use std::fmt;
use num::Complex;



fn parse_data(path: &str) -> Vec<Vec<char>> {
    let file = std::fs::read_to_string(&path).unwrap().replace("\r\n", "\n");
    let lines: Vec<Vec<char>> = file
        .lines()
        .map(|l| l.chars().collect())
        .collect();
    return lines;
}





struct Elf {
    position: Complex<i32>,
    direction_cycle: Vec<Complex<i32>>
}
impl fmt::Debug for Elf {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Elf {{ position: {}, \n proposal: {:?} }} \n", self.position, self.direction_cycle[0])
    }
}


// ----------------------  Elf Trait ----------------------
trait Move {
    fn move_elf(&mut self, direction: Complex<i32>);
}

impl Move for Elf {
    fn move_elf(&mut self, direction: Complex<i32>) {        
        self.position += direction;
    }
}

// ----------------------  Create List of Elves from Data ----------------------

fn create_elf_list (data: &Vec<Vec<char>>) -> Vec<Elf> {
    let mut elf_list = Vec::new();
    for (y,row) in data.iter().enumerate(){
        for (x,elf) in row.iter().enumerate(){
            match elf {
                '#' => {
                    elf_list.push(Elf { position: Complex::new(x as i32, y as i32), 
                    direction_cycle: vec![Complex::new(0, 1), Complex::new(0,-1), Complex::new(1,0), Complex::new(1,0) ] });
                }
                '.' => {
                    continue;
                }
                _ => println!("Error"),
        }
    }
}
    return elf_list;
}

fn move_proposal (elf_list: &Vec<Elf>) -> Vec<Complex<i32>> {
    let proposed_positions:Vec<Complex<i32>> = elf_list.iter().map(|elf| elf.position+elf.direction_cycle[0]).collect();
    return proposed_positions;
}


fn move_elves (elf_list: &mut Vec<Elf>) {
    let mut frozen_positions:HashSet<Complex<i32>> = HashSet::new();
    for elf in elf_list {
        elf.move_elf(elf.direction_cycle[0]);
        elf.direction_cycle.rotate_left(1);
    }
}






fn main() {
    let data: Vec<Vec<char>> = parse_data("./data/day23.txt");
    let ground = create_elf_list(&data);
    let proposals = move_proposal(&ground);
    println!("{:#?}",ground);
    println!("{:#?}",proposals);
   
}