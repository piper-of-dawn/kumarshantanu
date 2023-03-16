pub fn cartesian_product<T: Clone>(v1: &Vec<T>, v2: &Vec<T>) -> Vec<(T, T)> {
  v1.iter()
      .flat_map(|x| v2.iter().map(move |y| (x.clone(), y.clone())))
      .collect()
}