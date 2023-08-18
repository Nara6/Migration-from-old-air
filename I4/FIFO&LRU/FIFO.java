
import java.util.HashSet;
import java.util.InputMismatchException;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;


class FIFO
{
	// Method to find page faults using FIFO
	static int pageFaults(int pages[], int n, int capacity)
	{
		// To represent set of current pages. We use
		// an unordered_set so that we quickly check
		// if a page is present in set or not
		HashSet<Integer> s = new HashSet<>(capacity);
	
		// To store the pages in FIFO manner
		Queue<Integer> indexes = new LinkedList<>() ;
	
		// Start from initial page
		int page_faults = 0;
		for (int i=0; i<n; i++)
		{
			// Check if the set can hold more pages
			if (s.size() < capacity)
			{
				// Insert it into set if not present
				// already which represents page fault
				if (!s.contains(pages[i]))
				{
					s.add(pages[i]);
	
					// increment page fault
					page_faults++;
	
					// Push the current page into the queue
					indexes.add(pages[i]);
				}
			}
	
			// If the set is full then need to perform FIFO
			// i.e. remove the first page of the queue from
			// set and queue both and insert the current page
			else
			{
				// Check if current page is not already
				// present in the set
				if (!s.contains(pages[i]))
				{
					//Pop the first page from the queue
					int val = indexes.peek();
	
					indexes.poll();
	
					// Remove the indexes page
					s.remove(val);
	
					// insert the current page
					s.add(pages[i]);
	
					// push the current page into
					// the queue
					indexes.add(pages[i]);
	
					// Increment page faults
					page_faults++;
				}
			}
		}
	
		return page_faults;
	}
	
	// Driver method
	public static void main(String args[])
	{
		System.out.println("------------PAGE REPLACEMENT POLICY FIFO-------------");
		Scanner sc = new Scanner(System.in);
        System.out.print("\tHow many Pages: ");
        int pageSize = sc.nextInt();
        System.out.print("\tHow many Page Frames: ");
        int pageFrames = sc.nextInt();
        int sequence[] = new int[pageSize];
        int i=0,count=0;
        do{
            
            try{
                System.out.printf("Sequence %d : ", i+1);
                Integer sequenceSet = sc.nextInt();
                if(sequenceSet instanceof Integer){
                    sequence[i] = sequenceSet;
                }else{
                    break;
                }
            }catch (InputMismatchException e){
				count++;
                System.out.println("ACCEPT ONLY INTEGER!!!");
                break;
            }

            
            i++;
        }while(i!=pageSize);
		if(count==1){
			System.out.println("Exit");
		}else{
			System.out.println("*Number of Page Fault: "+pageFaults(sequence, pageSize, pageFrames));
		}
		
	}
}
