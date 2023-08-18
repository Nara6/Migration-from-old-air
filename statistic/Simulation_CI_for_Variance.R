#Create 1000 random samples from normal distribution with mu=70 and sigma=5
var_v=NULL
for (i in 1:1000) {
  x=rnorm(100,mean = 70,sd=5)
  v=99*var(x)/25
  var_v=c(var_v,v)
}
#Construct a histogram 
hist(var_v,breaks=30,main="Histogram of (n-1)*S^2/sigma^2",
     xlab="Sample Mean",cex=0.5)
qqnorm(var_v,col="blue",
       main="Normal Probability Plot of Sample Mean")
qqline(var_v,col="red")
b=boxplot(var_v,main="Boxplot of Sample Mean",
          xlab="Sample Mean",horizontal = TRUE,
          col="green",border = "blue")
text(round(b$stats,digits = 1),round(b$stats,digits = 1),
     y=c(1.2,1.3,1.3,1.3,1.2),cex=0.5)
#Simulation of n 95% CI for variance with n samples of size 100
Simul_CI_var=function(n,m=100,mu,sig,alpha){
  lower_lim=NULL
  upper_lim=NULL
  for (i in 1:n) {
    x=rnorm(m,mean = mu,sd=sig)
    s=sd(x)
    a=qchisq(1-alpha/2,df=m-1,lower.tail = FALSE)
    b=qchisq(alpha/2,df=m-1,lower.tail = FALSE)
    l_lim=((m-1)*s^2)/b
    u_lim=((m-1)*s^2)/a
    lower_lim=c(lower_lim,l_lim)
    upper_lim=c(upper_lim,u_lim)
  }
  #Find the coverage probability
  count=0
  for (i in 1:n) {
    if(lower_lim[i]<sig^2 & sig^2<upper_lim[i]){
      count=count+1
    }
  }
  #Draw a plot of 1000 95% CI for mu
  matplot(rbind(lower_lim,upper_lim),rbind(1:n,1:n),
          type = "l",lty = 1,
          xlab = "Sigma^2",ylab = "Samples",
          main="Confidence Intervals for n samples",
          cex = 0.5)
  abline(v=sig^2,col="black")
  cat("Number of CI among",n,"CI that contain variance is",count,"\n")
  cat("The coverage probability is",count/n)
}