fn main() {
    let mut list = [64, 34, 25, 12, 22, 11, 90, 5];
    let mut i = 0;

    let n = list.len();
    while i < n - 1 {
        let mut is_swapped = false;
        let mut j = 0;
        while j < n - i - 1 {
            let first = list[j];
            let next = list[j + 1];
            if first > next {
                list[j] = next;
                list[j + 1] = first;
            }
            is_swapped = true;
            j += 1;
        }
        if !is_swapped {
            break;
        }
        i += 1;
    }

    println!("{list:?}")
}
