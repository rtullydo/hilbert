var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "hilbert-2-2",
  "level": "1",
  "url": "hilbert-2-2.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This text is inspired by and adapts the general shape of the excellent Introduction to Hilbert Space by Nicholas Young. The reader is encouraged to track down a copy - Professor Young's exposition and in particular his presentation of the context and historical development of Hilbert spaces is an outstanding introduction to the origins and applications of the field. I do not attempt to recreate his deep historical knowledge nor his wide perspective on mathematics here.  Hilbert space theory is a natural bridge between undergraduate and graduate mathematical perspectives. It extends the ideas of finite dimensional linear algebra, blends in ideas from real and complex analysis, and points to a very active area of research in algebra. To get the most out of this text, the reader will need to be familiar with (or be willing to learn) ideas from real and complex analysis (e.g. uniform convergence of sequences of functions, analyticity in the complex plane), linear algebra (e.g. the spectral theorem for symmetric matrices), and basic point-set topology (e.g. metrics).  Of course the study and use of Hilbert spaces of functions goes well beyond what can be addressed in this text. A reader in need of an advanced course in linear algebra flavored with functional analysis should work through Axler's Linear Algebra Done Right . Axler has also recently published Measure, Integration, and Real Analysis , which covers the basics of functional analysis up to the spectral theorem for compact operators. The reader is also encouraged to work through Halmos's Introduction to Hilbert Space and the Theory of Spectral Multiplicity and especially the Hilbert space problem book , which treat more advanced topics than we consider here. My own path into the study of functional analysis ran through J. B. Conway's A Course in Functional Analysis and P. Lax's Functional Analysis . A reader interested in pursuing research in a modern flavor of Hilbert space theory might look to Pick interpolation and Hilbert function spaces and Operator Analysis by J. Agler, J. E. McCarthy, and N. J. Young (the same N. Young we pay homage to here). For the interaction of finite dimensional Hilbert spaces (i.e. matrices) and function theory, the reader should seek out Bhatia's excellent Matrix Analysis .  Another area of research arises not from studying the spaces but instead the maps that act on them. In this way, Hilbert space theory provides the foundation for the study of linear operators on infinte dimensional spaces. There is a major fork in the road here; one branch, concerned with single or classes of related operators and functions becomes operator theory . The study of the algebraic properties of the class of all operators on some space is the beginning of operator algebra . Both fields are vibrant and active.  "
},
{
  "id": "sec-intro-1",
  "level": "1",
  "url": "sec-intro-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Motivation",
  "body": "Motivation  One of the most profound ideas of linear algebra is that any finite dimensional vector space over or is secretly or . This insight allows us to reduce the study of vector spaces and the maps between them to the study of matrices.  The key idea is that every finite dimensional vector space can be represented in coordinates once we choose a basis. We denote the representation of a vector with respect to a basis by . Better yet, that basis can be chosen to be orthonormal by way of the Gram-Schmidt process and the dot product structure of Euclidean space. The coordinatization of also gives unique representations of linear maps betwen those spaces.   Let be finite dimensional vector spaces with bases . Then any linear map has a unique matrix representation with respect to by with    Typical examples introduced in a linear algebra course include the space of polynomials of degree less than or equal to . At the same time, we usually also get to see a very suggestive example of a useful linear map and the representation of that map in matrix form.  Let denote the space of polynomials of degree . Consider the map defined by That is, is the map that takes the derivative of a polynomial. It isn't hard to use the standard basis for to get the matrix representation for the action of on .  This example is a good place to begin asking questions about how far we can push finite dimensional linear algebra. The fact that differentiation of polynomials is represented by a matrix multiplying a vector is wonderful - but what else can we apply it to? Nice functions have power series that converge absolutely, and we like to think of an absolutely convergent power series as sort of an infinite polynomial . Our intution might lead us to make a connection with calculus at this point. When we learn to work with power series, we learn that for a convergent power series, In analogy with our example about polynomials above, we're tempted to write, for a function defined by a convergent power series, that   This idea is shot through with issues that need to be addressed.  The object is some kind of matrix. How does that make sense?  What are the vector spaces that is mapping between?  Does the idea of coordinitization still work?  If it does, what exactly is supposed to be?  Do infinite dimensional vector spaces and bases make sense at all?    The answers to these questions are the heart of what is known as the theory of Hilbert spaces , which naturally envelop and extend finite dimensional vector space theory. Hilbert spaces are the key objects used to study functions with various kinds of infinite series representations, which is a vast area of mathematics known as functional analysis . The objects are called operators , and are the central object of study in operator theory .  The rest of this introductory chapter will review important parts of linear algebra in finite dimensions that we need to motivate and understand Hilbert spaces.  "
},
{
  "id": "sec-intro-1-4",
  "level": "2",
  "url": "sec-intro-1.html#sec-intro-1-4",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "",
  "body": " Let be finite dimensional vector spaces with bases . Then any linear map has a unique matrix representation with respect to by with   "
},
{
  "id": "sec-intro-1-9",
  "level": "2",
  "url": "sec-intro-1.html#sec-intro-1-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hilbert spaces functional analysis operators operator theory "
},
{
  "id": "ch-intro-3",
  "level": "1",
  "url": "ch-intro-3.html",
  "type": "Section",
  "number": "1.2",
  "title": "Inner products",
  "body": "Inner products  The dot product of two vectors in is Standard notation for the dot product is and in is equivalent to , where designates the conjugate transpose of a matrix. The dot product has the following properties:             Once we have the dot product, we can start building the geometry of . First, note that Motivated by the real case, we say that two vectors are orthogonal and write if .  Another important inequality is indicated by the relationship between angles and the dot product in , where we have where is the angle between the vectors. While the idea of angle doesn't make sense in (at least in the same way), we still have the Cauchy-Schwarz inequality  Orthogonality also underlies the vector version of the Pythagorean theorem ,  Finally, it would be remiss to leave out the single most important inequality in mathematics, our old friend the triangle inequality , which in vector terms can be expressed   Because finite dimensional vector spaces have representations in coordinates as or , all finite dimensional vector spaces carry the geometric structure delineated above.  "
},
{
  "id": "ch-intro-3-2",
  "level": "2",
  "url": "ch-intro-3.html#ch-intro-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "ch-intro-3-3",
  "level": "2",
  "url": "ch-intro-3.html#ch-intro-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "ch-intro-3-4",
  "level": "2",
  "url": "ch-intro-3.html#ch-intro-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy-Schwarz "
},
{
  "id": "ch-intro-3-5",
  "level": "2",
  "url": "ch-intro-3.html#ch-intro-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pythagorean theorem "
},
{
  "id": "ch-intro-3-6",
  "level": "2",
  "url": "ch-intro-3.html#ch-intro-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triangle inequality "
},
{
  "id": "intro-2",
  "level": "1",
  "url": "intro-2.html",
  "type": "Section",
  "number": "1.3",
  "title": "Basis and coordinates",
  "body": "Basis and coordinates  Let be a vector space over a field . Recall that a (finite) set of vectors is linearly independent if only the trivial solution exists for the equation A set of vectors in is said to span  if every vector in can be realized as a linear combination of vectors in . That is, given , there exist coefficients so that   A basis for is a subset of so that is linearly independent and spans . It is a major result that every vector space has a basis. The full result requires the invocation of Zorn's Lemma or other equivalents of the axiom of choice and will not be proven here. (A nice argument can be found here .) Our interest is in modeling vector spaces the carry the logic and structure of Euclidean space. The dimension of is the order of a basis . If the basis has a finite number of elements, say , then is called finite dimensional. In particular, (and clearly providing motivation for the definition), .  Suppose that is a finite dimensional vector space with a basis . Let be a vector in . Then the coordinates of with respect to are the constants so that . These coordinates are unique once we have fixed a basis . That is, we have a bijective relationship between the vectors and the coordinate representations . In , the coordinate representation of a vector is straightforward to compute using the dot product.   Let be an orthonormal basis for and . Then the th coordinate of with respect to the basis is , and the expansion of with respect to the basis is   Furthermore, we can use the coordinate representation to write representing matrices for linear functions . Suppose that are vector spaces of dimension respectively over . Then     where is the matrix that represents and is the natural bijection- the coordinatization - between and respectively. We should note that matrix multiplication is defined so that     reduces to the diagram     That is, the representing matrix of a composition is the product of the representing matrices of the functions.  Any basis of a vector space can be replaced with an equivalent basis of orthonormal vectors - the algorithm for creating an orthonormal basis from a basis is called the Gram-Schmidt process .  "
},
{
  "id": "intro-2-2",
  "level": "2",
  "url": "intro-2.html#intro-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent span "
},
{
  "id": "intro-2-3",
  "level": "2",
  "url": "intro-2.html#intro-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension "
},
{
  "id": "intro-2-4",
  "level": "2",
  "url": "intro-2.html#intro-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinates of with respect to "
},
{
  "id": "thm-finite-coords",
  "level": "2",
  "url": "intro-2.html#thm-finite-coords",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "",
  "body": " Let be an orthonormal basis for and . Then the th coordinate of with respect to the basis is , and the expansion of with respect to the basis is  "
},
{
  "id": "intro-2-7",
  "level": "2",
  "url": "intro-2.html#intro-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gram-Schmidt process "
},
{
  "id": "ch-intro-5",
  "level": "1",
  "url": "ch-intro-5.html",
  "type": "Section",
  "number": "1.4",
  "title": "Operators",
  "body": "Operators  When a linear function maps into itself, special things happen. First, the matrix that represents is square. There are a large number of equivalences between the structure of square matrices, linear maps, and sets of vectors. Many of these are captured in the invertible matrix theorem , one of the central objects of study in elementary linear algebra.   Invertible matrix theorem  Let be an matrix. If any of the following conditions hold, all of them do. If any of them are false, they are all.  is invertible.  row reduces to the identity matrix .  has pivot positions.  .  The equation has only the trivial solution.  The columns of are linearly independent.  The function is one-to-one.  The equation is consistent for all .  The columns of span .  The function is onto.  There is a matrix so that .  There is a matrix so that .  is invertible.     Operators contain more information than the invertibility of the functions that they represent. For the following discussion, let us fix a basis of a vector space and let be the matrix that represents a function . A scalar and a vector are said to be an eigenpair for if It is straightforward to see that the set of all vectors for which the eigenvector equation holds is a subspace of , called the eigenspace associated with . The eigenspaces of the matrix are its invariant subspaces , which is to say that a vector in an eigenspace is mapped by to the same eigenspace. It turns out that knowing the invariant subspaces of are often enough to completely characterize . If is and has linearly independent eigenvectors (that is, one can find a basis of consisting of eigenvectors of ), then where is a matrix of eigenvectors and is a diagonal matrix of the associated eigenvalues (including repetition of course). (One should think of as a change of basis matrix under which the operator becomes diagonal.)  Many operators are not diagonalizable, even very simple ones. For example, only has a one-dimensional eigenspace. Diagonalizability is so useful that we give characterizations of those operators a special name, the Spectral Theorem . An operator on a real vector space is called symmetric if . An operator on a complex vector space is called Hermitian (or conjugate symmetric) if . One of the major theorems of elementary linear algebra is that such operators are diagonalizable and that there exists an orthonormal basis of eigenvectors for .   Let be an real (complex) matrix. Then is diagonalizable with respect to an orthonormal basis of eigenvectors if and only if is symmetric (hermitian).   For complex operators, one can say more. is called normal if . One reason that complex vector spaces are so much nicer than real vector spaces is that normal operators turn out to have orthonormal diagonalizations.  Complex (finite) spectral theorem  Let be an operator on a finite dimensional Hilbert space . Then is normal if and only if can be diagonalized with respect to an orthonormal basis of eigenvectors for .   One of the goals of Hilbert space theory is to capture these kinds of structural results in the context of infinite dimensional Hilbert spaces and operators on them.  "
},
{
  "id": "ch-intro-5-2",
  "level": "2",
  "url": "ch-intro-5.html#ch-intro-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible matrix theorem "
},
{
  "id": "thminvmat1",
  "level": "2",
  "url": "ch-intro-5.html#thminvmat1",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "Invertible matrix theorem.",
  "body": " Invertible matrix theorem  Let be an matrix. If any of the following conditions hold, all of them do. If any of them are false, they are all.  is invertible.  row reduces to the identity matrix .  has pivot positions.  .  The equation has only the trivial solution.  The columns of are linearly independent.  The function is one-to-one.  The equation is consistent for all .  The columns of span .  The function is onto.  There is a matrix so that .  There is a matrix so that .  is invertible.    "
},
{
  "id": "ch-intro-5-4",
  "level": "2",
  "url": "ch-intro-5.html#ch-intro-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigenpair eigenspace invariant subspaces "
},
{
  "id": "ch-intro-5-5",
  "level": "2",
  "url": "ch-intro-5.html#ch-intro-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Spectral Theorem symmetric Hermitian "
},
{
  "id": "ch-intro-5-6",
  "level": "2",
  "url": "ch-intro-5.html#ch-intro-5-6",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "",
  "body": " Let be an real (complex) matrix. Then is diagonalizable with respect to an orthonormal basis of eigenvectors if and only if is symmetric (hermitian).  "
},
{
  "id": "ch-intro-5-7",
  "level": "2",
  "url": "ch-intro-5.html#ch-intro-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal "
},
{
  "id": "ch-intro-5-8",
  "level": "2",
  "url": "ch-intro-5.html#ch-intro-5-8",
  "type": "Theorem",
  "number": "1.4.3",
  "title": "Complex (finite) spectral theorem.",
  "body": "Complex (finite) spectral theorem  Let be an operator on a finite dimensional Hilbert space . Then is normal if and only if can be diagonalized with respect to an orthonormal basis of eigenvectors for .  "
},
{
  "id": "inner-1",
  "level": "1",
  "url": "inner-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Inner products and <span class=\"process-math\">\\(\\ell^2\\)<\/span>",
  "body": "Inner products and  Recall that the inner product on is the familiar expression where . How can this be extended to infinite dimensions?   For a general complex vector space , an inner product is a map satisfying the following properties for all and scalars :  ;  ;  ;  if .   An inner product space is a pair consisting of a complex vector space and an inner product on . An inner product space is can also be called a pre-Hilbert space .   Show that the map defines an inner product on , the complex vector space of all continuous complex-valued functions on the the interval with pointwise addition and scalar multiplication.  Recall that the trace of a square matrix is the sum of its diagonal entries. Show that the map is an inner product on the vector space of matrices with complex entries, where denotes the conjugate transpose.  The basic properties in can be used to derive the following statements, which show that a complex inner product is linear in the first argument and conjugate linear in the second.   Let be an inner product space. For any and ,  ;   ;  if for all , then .      (1): By ,   Parts 2, 3 are left as an exercise.  (4): If , then Assuming that this statement holds for all means that it holds for . But then , so by (4), it must be that and so .    To extend the notion from to an infinite dimensional analogue of infinite vectors , we might naively propose the inner product though this leaves the question of what space should go with this definition. One major concern is that an infinite sum need not converge, and we would certainly prefer that the inner product be defined on the vectors that we apply it to. We can't use the obvious idea, which is to consider the space , since it is easy to find many pairs of poorly behaved vectors. (For example, if , then .)  One solution is to ensure that the sequence of coordinates in vectors that we work with are very well behaved in infinite sums. A very nice subspace of is little l-two , denoted .   is the complex vector space of all complex sequences which are square summable and equipped with componentwise addition and scalar multiplication; that is,  is an inner product space with the inner product given by   "
},
{
  "id": "def-innerproduct",
  "level": "2",
  "url": "inner-1.html#def-innerproduct",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": " For a general complex vector space , an inner product is a map satisfying the following properties for all and scalars :  ;  ;  ;  if .   An inner product space is a pair consisting of a complex vector space and an inner product on . An inner product space is can also be called a pre-Hilbert space .  "
},
{
  "id": "ex-cont-fun-ip",
  "level": "2",
  "url": "inner-1.html#ex-cont-fun-ip",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "Show that the map defines an inner product on , the complex vector space of all continuous complex-valued functions on the the interval with pointwise addition and scalar multiplication. "
},
{
  "id": "inner-1-5",
  "level": "2",
  "url": "inner-1.html#inner-1-5",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": "Recall that the trace of a square matrix is the sum of its diagonal entries. Show that the map is an inner product on the vector space of matrices with complex entries, where denotes the conjugate transpose. "
},
{
  "id": "inner-1-6",
  "level": "2",
  "url": "inner-1.html#inner-1-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear conjugate linear "
},
{
  "id": "thm-innerproduct",
  "level": "2",
  "url": "inner-1.html#thm-innerproduct",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "",
  "body": " Let be an inner product space. For any and ,  ;   ;  if for all , then .    "
},
{
  "id": "inner-1-8",
  "level": "2",
  "url": "inner-1.html#inner-1-8",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " (1): By ,   Parts 2, 3 are left as an exercise.  (4): If , then Assuming that this statement holds for all means that it holds for . But then , so by (4), it must be that and so .  "
},
{
  "id": "inner-1-9",
  "level": "2",
  "url": "inner-1.html#inner-1-9",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": ""
},
{
  "id": "inner-1-12",
  "level": "2",
  "url": "inner-1.html#inner-1-12",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": " is the complex vector space of all complex sequences which are square summable and equipped with componentwise addition and scalar multiplication; that is,  is an inner product space with the inner product given by  "
},
{
  "id": "inner-2",
  "level": "1",
  "url": "inner-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Inner products, norms, and metric spaces",
  "body": "Inner products, norms, and metric spaces  A metric is a function that measures distance in a space. The most obvious example of a metric that we encounter in elementary mathematics is the Euclidean metric , which arises from the expression for the magnitude of a vector in, e.g., : This relation underlies the distance formula  which is the Euclidean metric on . This relationship between magnitude (in terms of an inner product) and distance between vectors can be generalized to any vector space that has an inner product.   The norm of a vector in an inner product space , denoted is defined to be   That is, in an inner product space, the inner product gives a natural method for evaluating magnitude of a vector. So with the dot product on , we get  Using the inner product set out in , for , (At this point, you might be suspicious that there is a relationship between functions that are square integrable and sequences that are square summable. Keep that suspicion close!)  Some basic facts about the behavior of norms induced by inner products follow.   Let be a inner product space. For any and ,  and if and only if ;  .    Prove .  In Euclidean space, we get a suite of geometric relations that we can use to work with vectors. In a general inner product space, we recover some of the same. In , the dot product contains information about the angle between two vectors: In the complex or abstract setting, the notion of angle between vectors no longer makes sense, but the relationship of the magnitudes still holds in the form of the Cauchy-Schwarz inequality.   For any in an inner product space , Equality holds if and only if and are linearly dependent.    First, suppose that and are linearly dependent so that for some . Then by and , the left and right sides of are both equal to .  On the other hand, if are linearly independent, then for any , it must be that . Then To get the real part of the complex number out of the quadratic expression, let be a unimodular constant so that . Now let and substitute to conclude that for all , That is, a quadratic polynomial in is strictly positive. This can only happen if the discriminant is negative, which gives and so    Prove that for any , and find the functions for which equality holds.  The Cauchy-Schwarz inequality is the first of a murderers row of important geometric inequalities. The next is probably the single most important inequality in mathematical analysis.  Triangle inequality  For any in ,     A typical trick is to avoid square roots by using the squares of norms when working with inner products. Hence, Monotonicity of the square root gives the result.   Use to show that is closed under addition.  Parallelogram identity  For ,    Using , it is straightforward to compute that Adding the expressions above gives the result.   So far, we've used the inner product to compute a norm on an inner product space. If on the other hand we know how to compute norms, we can recover the inner product, should it exist (e.g. if we know that we are in an inner product space).  Polarization identity  For in an inner product space ,   Prove .  ( A larger result , not proven here, is due to Frechet, von Neumann, and Jordan and states that in a normed space  , if the parallelogram law holds, then there is an inner product on so that . We will see soon that while every inner product space carries a norm, the converse statement is not true. )  "
},
{
  "id": "inner-2-2",
  "level": "2",
  "url": "inner-2.html#inner-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric Euclidean metric distance formula "
},
{
  "id": "def-norm-ip",
  "level": "2",
  "url": "inner-2.html#def-norm-ip",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": " The norm of a vector in an inner product space , denoted is defined to be  "
},
{
  "id": "thm-norm",
  "level": "2",
  "url": "inner-2.html#thm-norm",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": " Let be a inner product space. For any and ,  and if and only if ;  .   "
},
{
  "id": "inner-2-8",
  "level": "2",
  "url": "inner-2.html#inner-2-8",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": "Prove . "
},
{
  "id": "inner-2-9",
  "level": "2",
  "url": "inner-2.html#inner-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy-Schwarz inequality. "
},
{
  "id": "thm-cauchy-schwarz",
  "level": "2",
  "url": "inner-2.html#thm-cauchy-schwarz",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": " For any in an inner product space , Equality holds if and only if and are linearly dependent.  "
},
{
  "id": "inner-2-11",
  "level": "2",
  "url": "inner-2.html#inner-2-11",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " First, suppose that and are linearly dependent so that for some . Then by and , the left and right sides of are both equal to .  On the other hand, if are linearly independent, then for any , it must be that . Then To get the real part of the complex number out of the quadratic expression, let be a unimodular constant so that . Now let and substitute to conclude that for all , That is, a quadratic polynomial in is strictly positive. This can only happen if the discriminant is negative, which gives and so   "
},
{
  "id": "inner-2-12",
  "level": "2",
  "url": "inner-2.html#inner-2-12",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": "Prove that for any , and find the functions for which equality holds. "
},
{
  "id": "thm-triangle",
  "level": "2",
  "url": "inner-2.html#thm-triangle",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "Triangle inequality.",
  "body": "Triangle inequality  For any in ,   "
},
{
  "id": "inner-2-15",
  "level": "2",
  "url": "inner-2.html#inner-2-15",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " A typical trick is to avoid square roots by using the squares of norms when working with inner products. Hence, Monotonicity of the square root gives the result.  "
},
{
  "id": "inner-2-16",
  "level": "2",
  "url": "inner-2.html#inner-2-16",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "",
  "body": "Use to show that is closed under addition. "
},
{
  "id": "thm-parallelogram",
  "level": "2",
  "url": "inner-2.html#thm-parallelogram",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Parallelogram identity.",
  "body": "Parallelogram identity  For ,  "
},
{
  "id": "inner-2-18",
  "level": "2",
  "url": "inner-2.html#inner-2-18",
  "type": "Proof",
  "number": "2.2.3",
  "title": "",
  "body": " Using , it is straightforward to compute that Adding the expressions above gives the result.  "
},
{
  "id": "thm-polarization",
  "level": "2",
  "url": "inner-2.html#thm-polarization",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "Polarization identity.",
  "body": "Polarization identity  For in an inner product space ,  "
},
{
  "id": "inner-2-21",
  "level": "2",
  "url": "inner-2.html#inner-2-21",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": "Prove . "
},
{
  "id": "inner-2-22",
  "level": "2",
  "url": "inner-2.html#inner-2-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normed space "
},
{
  "id": "inner-3",
  "level": "1",
  "url": "inner-3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Examples of inner product spaces",
  "body": "Examples of inner product spaces  So far, our examples of inner product spaces have been:  : the space of dimensional complex vectors equipped with the inner product ;  : the space of square summable infinite sequences equipped with the inner product  : the space of complex matrices equipped with the inner product  : the space of complex-valued continuous functions on the interval equipped with the inner product   To develop intuition and to show how inner product gemetry interacts with other mathematical structures, particularly those of analysis, we need more examples. The first three spaces in some sense very much resemble Euclidean space. They are easy to work with but don't reveal the more nuanced structure of Hilbert spaces. On the other hand, general continuous functions are about as hard to grasp a collection of objects as exists in mathematics ( I turn away with fear and horrow from the lamentable plague of continuous functions which do not have derivatives... Hermite to Stieltjes, 1893 - unfortunately, most continuous functions are pathological in this sense ).  Examples of inner product spaces with non-trivial geometry include spaces of rational functions (that is, quotients of complex polynomials), which provide interesting examples and turn out to be of importance in applications. Rational functions also provide a foundation for the study of functions evaluated on matrix inputs, which will be considered much later in this text.  It is most natural to consider the following examples in the context of complex-valued functions. A function is analytic if has a power series that converges in a neighborhood of every . Denote by the space of rational functions that are analytic on the unit circle equipped with pointwise addition and scalar multiplication. is an inner product space with the inner product with the integral taken as travels around counterclockwise. is those rational functions with no pole on the unit circle .  We can restrict to the subspace of functions that are analytic on the closed unit disk , where . We will denote this space of functions . It is an inner product space with the same inner product as . These spaces are subspaces of the larger spaces of functions and , which will be discussed detail as we proceed.  Another family of important function spaces are called Sobolev spaces . The simplest example is the space of continuously differentiable functions with values in with the inner product Including the derivative in the inner product gives control over the behavior of both the function and the derivative. and the broader family of Sobolev spaces are important in the study of differential equations.  Of central importance in engineering and the sciences is the space of trigonometric polynomials , which are functions of the form where and . Using Euler's identity, it is computationally efficient to use the equivalent characterization The space of trigonometric polynomials is a complex vector space with pointwise addition and scalar multiplication. That the relation is an an inner product on is left as an exercise.     "
},
{
  "id": "inner-3-7",
  "level": "2",
  "url": "inner-3.html#inner-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sobolev spaces "
},
{
  "id": "inner-3-8",
  "level": "2",
  "url": "inner-3.html#inner-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomials "
},
{
  "id": "inner-4",
  "level": "1",
  "url": "inner-4.html",
  "type": "Section",
  "number": "2.4",
  "title": "Exercises",
  "body": "Exercises   Prove that is an an inner product on . (Hint: parametrize by for ).  Prove that is an inner product on .  Prove that is an inner product on .  Prove the Pythagorean theorem in an inner product space ; that is, show that if for then   Define the elementary functions where and for values of . Prove that when as elements of and as elements of (that is, with respect to and ). (This is precursor work to the development of orthonormal systems , which we will meet shortly.)   "
},
{
  "id": "inner-4-2-1",
  "level": "2",
  "url": "inner-4.html#inner-4-2-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "Prove that is an an inner product on . (Hint: parametrize by for ). "
},
{
  "id": "pr-1-1",
  "level": "2",
  "url": "inner-4.html#pr-1-1",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "Prove that is an inner product on . "
},
{
  "id": "inner-4-2-3",
  "level": "2",
  "url": "inner-4.html#inner-4-2-3",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "Prove that is an inner product on . "
},
{
  "id": "inner-4-2-4",
  "level": "2",
  "url": "inner-4.html#inner-4-2-4",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "Prove the Pythagorean theorem in an inner product space ; that is, show that if for then  "
},
{
  "id": "inner-4-2-5",
  "level": "2",
  "url": "inner-4.html#inner-4-2-5",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "Define the elementary functions where and for values of . Prove that when as elements of and as elements of (that is, with respect to and ). (This is precursor work to the development of orthonormal systems , which we will meet shortly.) "
},
{
  "id": "norm-1",
  "level": "1",
  "url": "norm-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Norms",
  "body": "Norms  When we think about basic notions of open sets in Euclidean space , we typically consider open balls - that is, sets of the form using the standard norm Euclidean norm to define the notion of distance.  Of course, there are other ways to measure the distance between vectors that are consistent with the properties that we associate with metrics. The metric used will change the elements that fall into a ball of radius centered at . For example, on , we can define the taxicab metric    Describe the sets   We formalize the notion of metric in the following definition.   Let be a set. A metric is a map which satisfies for all   ;  if and only if ;  ;  for all .     Our focus is going to be on the analysis of inner product spaces of functions. But many spaces of functions can be equipped with metrics that do not arise from inner products. We've already seen , the space of continuous functions on , which is an inner product space with inner product . Another natural notion of distance in this space is to measure the maximum modulus of the pointwise distace between the functions: This is the metric that corresponds to uniform convergence of sequences of functions in and thus is natural and useful. However, the open sets in this metric do not coincide with the open sets in the inner product topology. In fact, there is no inner product on that corresponds to the maximum modulus metric.  Because we are ultimately interested in analysis involving vector spaces of functions, we will need to consider a broader range of metrics than those strictly arising from inner products. We wish to replicate the properties that a norm inherits from inner product as seen in and in . (These are the properties that make it possible do to analysis!)   Let be a real or complex vector space. A norm on is a map which satisfies  if ;  for all and ;  for all .   A normed space is a pair where is a real or complex vector space and is a norm.   We should observe that setting into property (2) above gives that in a normed space.  Show that the supremum norm  on the complex vector space of all continuous complex valued functions on defined by satisfies conditions 1-3 in .  In the same way that inner products give rise to norms, norms give rise to metrics.   In a normed space , the (distance) function induced by the norm and defined by is a translation-invariant metric.  To say that a metric is translation-invariant is to say that for any .   We will show that satisifes the four properties of  (1): From (1), we have when .  (2):   (3):   (4): From (3), we have for all ,  That is translation invariant is straightforward and left as an exercise.   What we've developed so far gives a hierarchy of structured spaces, each category enveloping the previous; inner product spaces are normed spaces, and normed spaces are metric spaces. We can go one step further and consider more generally linear spaces that have a toplogy but not necessarily a metric. These spaces are called topological vector spaces , which are foundationally important in their own right, but well beyond the scope of this text. If you continue on your journey into Hilbert space theory, you'll meet them in functional analysis.  Analysis, particularly at the undergraduate level, can be lampooned as the art of reducing a problem to the triangle inequality and then taking limits. Even this gentle mockery includes a major mathematical idea - namely, that absolute values (and more generally norms) are well-behaved under limits. That is, in normed spaces the basic operators are continuous in the sense that small changes in input objects result in small changes in norm.   In a normed space , the map is continuous.    Exercise.    In a normed space , the algebraic operations on are continuous. That is, the maps where denotes the scalar field, are continuous in the respective product topologies.    We will show that scalar multiplication is continuous at an arbitrary point . For any , we have  Choose Recall that we want to show that all nearby points have norm within of . We'll choose neighborhoods of and in the following way: Then is an open neighborhood of . For , we know by construction that Then by , we have   The remaining part of the proof is similar and left as an exercise.   Finally, we note that (unsurprisingly), inner products are continuous on inner product spaces.   In an inner product space , the inner product is continuous. That is, the map is continuous in the product topology.   The proof is similar to the proof of and is left as an exercise.  "
},
{
  "id": "norm-1-2",
  "level": "2",
  "url": "norm-1.html#norm-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open balls "
},
{
  "id": "norm-1-3",
  "level": "2",
  "url": "norm-1.html#norm-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "taxicab metric "
},
{
  "id": "norm-1-4",
  "level": "2",
  "url": "norm-1.html#norm-1-4",
  "type": "Checkpoint",
  "number": "3.1.1",
  "title": "",
  "body": "Describe the sets  "
},
{
  "id": "def-metric",
  "level": "2",
  "url": "norm-1.html#def-metric",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": " Let be a set. A metric is a map which satisfies for all   ;  if and only if ;  ;  for all .    "
},
{
  "id": "def-norm",
  "level": "2",
  "url": "norm-1.html#def-norm",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": " Let be a real or complex vector space. A norm on is a map which satisfies  if ;  for all and ;  for all .   A normed space is a pair where is a real or complex vector space and is a norm.  "
},
{
  "id": "ex-CX",
  "level": "2",
  "url": "norm-1.html#ex-CX",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": "Show that the supremum norm  on the complex vector space of all continuous complex valued functions on defined by satisfies conditions 1-3 in . "
},
{
  "id": "thm-metric",
  "level": "2",
  "url": "norm-1.html#thm-metric",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "",
  "body": " In a normed space , the (distance) function induced by the norm and defined by is a translation-invariant metric.  To say that a metric is translation-invariant is to say that for any .  "
},
{
  "id": "norm-1-14",
  "level": "2",
  "url": "norm-1.html#norm-1-14",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": "We will show that satisifes the four properties of  (1): From (1), we have when .  (2):   (3):   (4): From (3), we have for all ,  That is translation invariant is straightforward and left as an exercise.  "
},
{
  "id": "norm-1-15",
  "level": "2",
  "url": "norm-1.html#norm-1-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "topological vector spaces "
},
{
  "id": "norm-1-16",
  "level": "2",
  "url": "norm-1.html#norm-1-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "thm-norm-cont",
  "level": "2",
  "url": "norm-1.html#thm-norm-cont",
  "type": "Theorem",
  "number": "3.1.6",
  "title": "",
  "body": " In a normed space , the map is continuous.  "
},
{
  "id": "norm-1-18",
  "level": "2",
  "url": "norm-1.html#norm-1-18",
  "type": "Proof",
  "number": "3.1.2",
  "title": "",
  "body": " Exercise.  "
},
{
  "id": "thm-algop-cont",
  "level": "2",
  "url": "norm-1.html#thm-algop-cont",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "",
  "body": " In a normed space , the algebraic operations on are continuous. That is, the maps where denotes the scalar field, are continuous in the respective product topologies.  "
},
{
  "id": "norm-1-20",
  "level": "2",
  "url": "norm-1.html#norm-1-20",
  "type": "Proof",
  "number": "3.1.3",
  "title": "",
  "body": " We will show that scalar multiplication is continuous at an arbitrary point . For any , we have  Choose Recall that we want to show that all nearby points have norm within of . We'll choose neighborhoods of and in the following way: Then is an open neighborhood of . For , we know by construction that Then by , we have   The remaining part of the proof is similar and left as an exercise.  "
},
{
  "id": "thm-ip-cont",
  "level": "2",
  "url": "norm-1.html#thm-ip-cont",
  "type": "Theorem",
  "number": "3.1.8",
  "title": "",
  "body": " In an inner product space , the inner product is continuous. That is, the map is continuous in the product topology.  "
},
{
  "id": "norm-2",
  "level": "1",
  "url": "norm-2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Closed linear subspaces",
  "body": "Closed linear subspaces  In this section we'll note the first major complication that working in infinite dimensions introduces. In particular, we need to be careful about what we mean by the term closed . Recall that in finite dimensions, a subset of a vector space is called a subspace if it is closed under arbitrary linear combinations. This is closure under algebra - is a subspace if for all and , we have that .  On the other hand, in analysis we signify by closed set the idea that any convergent sequence in a set has a limit point in the set. This is topological closure. In finite dimensions, linear subspaces are topologically closed. In infinite dimensions it is easy to demonstrate that this is not true.   Let denote the space of sequences in which have only finitely many non-zero terms. (That is, there is some index beyond which the sequence has only entries.)  It is straightforward to see that is a linear subspace of . However, is not a closed set inside . To see this, we will construct a convergent sequence that converges to a point outside of . For each , the sequence is an element of . Considering each as a vector in , the sequence of vectors converges to the limit point in since That is, but , and so is not closed in .   When we use the term subspace, we will always mean linear subspace of a vector space. At least for normed spaces, we can fill in the edges of a subspace by including the limit points. Why should we want to? One of the basic lessons of real analysis in one variable is that completeness is a property of the real numbers that allows analysis to work. What we seek to do is prepare our spaces so that we can work with similar tools for spaces other than .   The closure of a normed subspace is a subspace.    Let be a subspace of a normed space , and let denote its closure. Let . Then there exist sequences in so that and . As addition is continuous, we get . Because is a subspace, is in for all , and so must be in . We conclude that is closed under addition. The argument that is closed under scalar multiplication is similar. Thus, is a subspace of .   We will frequently wish to work with the smallest linear subspace containing a set of vectors . (This is similar to the notion of the span of a set of vectors in finite dimensional spaces.)   Let be a normed space and let . The linear span of , denoted , is the intersection of all subspaces of that contain . The closed linear span of , denoted , is the intersection of all closed linear subspaces of that contain .   Show that is the unique subspace of which contains and is in turn contained in every subspace of that contains . Likewise, is the unique closed subspace of that contains and is in turn contained in every subspace of that contains .  While this might seem different from the notion of span that we learn in elementary linear algebra, these two definitions in fact coincide.   Let denote the set of finite linear combinations of elements of ; that is, Then .   Exercise.  We can think of the elements missing from as the limit points of finite linear combinations of elements in , as the next theorem shows (and which justifies the notation ).   For any set contained in a normed space , is the closure of .    By , is a subspace of . It is closed and contains , and so by it must be that .  On the other hand, is closed and contains and so it must be that .   We should point out again that in some sense, there is one finite dimensional vector space over for each dimension , namely . We can make this more precise by pointing out that we can always induce a Euclidean norm via coordinatization and that the norm on is equivalent to a Euclidean norm (by which we mean that they determine the same topology).   Any two norms on a finite dimensional vector space are equivalent.   The proof of this theorem will require some important results from real analysis. The theorems will be stated in an appendix.   Since is finite dimensional, let be a basis for so that every has a representation Define a coordinate Euclidean norm  on by   We will show that and determine the same open sets, and hence the same topology. (That is, we will show that any open -ball is contained in a -ball and vice versa.)  Let . Then This is an inner product of vectors in , and so by Cauchy-Schwarz , we get where is the fixed positive constant Then for any , the open -ball of radius about contains the open -ball of radius about . We conclude that every -open set in is also -open.  In the other direction, we exploit properties of the real numbers. Define a function by (We can think of this function as taking coordinates back to vectors in .) is a clearly a continuous function with respect to the standard topology on . The Heine-Borel theorem gives that the set is compact in . (This set consists of the coordinates of those points for which .) Thus, by , attains its infimum on . Since the are a basis and thus linearly independent, cannot be , and so . Thus, we have shown that whenever . By (2), we conclude that Thus, for any , the -ball of radius about a point contains the -ball of radius about . We conclude that every -open set is also -open.   The correspondence between finite dimensional normed spaces and extends to the Heine-Borel theorem itself.   Closed and bounded sets in a finite dimensional normed space are compact.    Let be a finite-dimensional normed space. Suppose that is closed and bounded. Then, since for all , is also -bounded. Because and are equivalent norms, they determine the same topology, and so is also -closed. Thus, in the Euclidean space , is closed and bounded and thus compact by the Heine-Borel theorem .   "
},
{
  "id": "norm-2-2",
  "level": "2",
  "url": "norm-2.html#norm-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "ex-ell0",
  "level": "2",
  "url": "norm-2.html#ex-ell0",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": " Let denote the space of sequences in which have only finitely many non-zero terms. (That is, there is some index beyond which the sequence has only entries.)  It is straightforward to see that is a linear subspace of . However, is not a closed set inside . To see this, we will construct a convergent sequence that converges to a point outside of . For each , the sequence is an element of . Considering each as a vector in , the sequence of vectors converges to the limit point in since That is, but , and so is not closed in .  "
},
{
  "id": "thm-closed-subspace",
  "level": "2",
  "url": "norm-2.html#thm-closed-subspace",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": " The closure of a normed subspace is a subspace.  "
},
{
  "id": "norm-2-7",
  "level": "2",
  "url": "norm-2.html#norm-2-7",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " Let be a subspace of a normed space , and let denote its closure. Let . Then there exist sequences in so that and . As addition is continuous, we get . Because is a subspace, is in for all , and so must be in . We conclude that is closed under addition. The argument that is closed under scalar multiplication is similar. Thus, is a subspace of .  "
},
{
  "id": "def-linear-span",
  "level": "2",
  "url": "norm-2.html#def-linear-span",
  "type": "Definition",
  "number": "3.2.4",
  "title": "",
  "body": " Let be a normed space and let . The linear span of , denoted , is the intersection of all subspaces of that contain . The closed linear span of , denoted , is the intersection of all closed linear subspaces of that contain .  "
},
{
  "id": "norm-2-10",
  "level": "2",
  "url": "norm-2.html#norm-2-10",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "",
  "body": "Show that is the unique subspace of which contains and is in turn contained in every subspace of that contains . Likewise, is the unique closed subspace of that contains and is in turn contained in every subspace of that contains . "
},
{
  "id": "thm-span-lincomb",
  "level": "2",
  "url": "norm-2.html#thm-span-lincomb",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "",
  "body": " Let denote the set of finite linear combinations of elements of ; that is, Then .  "
},
{
  "id": "norm-2-13",
  "level": "2",
  "url": "norm-2.html#norm-2-13",
  "type": "Proof",
  "number": "3.2.2",
  "title": "",
  "body": "Exercise. "
},
{
  "id": "thm-cl-span",
  "level": "2",
  "url": "norm-2.html#thm-cl-span",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "",
  "body": " For any set contained in a normed space , is the closure of .  "
},
{
  "id": "norm-2-16",
  "level": "2",
  "url": "norm-2.html#norm-2-16",
  "type": "Proof",
  "number": "3.2.3",
  "title": "",
  "body": " By , is a subspace of . It is closed and contains , and so by it must be that .  On the other hand, is closed and contains and so it must be that .  "
},
{
  "id": "thm-finite-norm-equiv",
  "level": "2",
  "url": "norm-2.html#thm-finite-norm-equiv",
  "type": "Theorem",
  "number": "3.2.8",
  "title": "",
  "body": " Any two norms on a finite dimensional vector space are equivalent.  "
},
{
  "id": "norm-2-20",
  "level": "2",
  "url": "norm-2.html#norm-2-20",
  "type": "Proof",
  "number": "3.2.4",
  "title": "",
  "body": " Since is finite dimensional, let be a basis for so that every has a representation Define a coordinate Euclidean norm  on by   We will show that and determine the same open sets, and hence the same topology. (That is, we will show that any open -ball is contained in a -ball and vice versa.)  Let . Then This is an inner product of vectors in , and so by Cauchy-Schwarz , we get where is the fixed positive constant Then for any , the open -ball of radius about contains the open -ball of radius about . We conclude that every -open set in is also -open.  In the other direction, we exploit properties of the real numbers. Define a function by (We can think of this function as taking coordinates back to vectors in .) is a clearly a continuous function with respect to the standard topology on . The Heine-Borel theorem gives that the set is compact in . (This set consists of the coordinates of those points for which .) Thus, by , attains its infimum on . Since the are a basis and thus linearly independent, cannot be , and so . Thus, we have shown that whenever . By (2), we conclude that Thus, for any , the -ball of radius about a point contains the -ball of radius about . We conclude that every -open set is also -open.  "
},
{
  "id": "thm-norm-heine",
  "level": "2",
  "url": "norm-2.html#thm-norm-heine",
  "type": "Corollary",
  "number": "3.2.9",
  "title": "",
  "body": " Closed and bounded sets in a finite dimensional normed space are compact.  "
},
{
  "id": "norm-2-23",
  "level": "2",
  "url": "norm-2.html#norm-2-23",
  "type": "Proof",
  "number": "3.2.5",
  "title": "",
  "body": " Let be a finite-dimensional normed space. Suppose that is closed and bounded. Then, since for all , is also -bounded. Because and are equivalent norms, they determine the same topology, and so is also -closed. Thus, in the Euclidean space , is closed and bounded and thus compact by the Heine-Borel theorem .  "
},
{
  "id": "norm-3",
  "level": "1",
  "url": "norm-3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Exercises",
  "body": " Exercises   is the complex vector space of bounded sequences of complex numbers with entrywise addition and scalar multiplication. Verify that the infinity norm  meets the requirements of .  is the complex vector space of absolutely summable sequences of complex numbers - that is, all sequences such that with entrywise addition and scalar multiplication. Show that the 1-norm  meets the requirements of .  Prove that the parallelogram law does not hold for on the space . Conclude that there is no inner product on such that .  Prove that, for , the set is a closed linear subspace of (see Table ).  Show that the subspace of polynomials is not closed in in the supremum norm or in the inner product .  denotes the subspace of consisting of all sequences which tend to 0 as . Prove that is closed in with respect to .  Guess the closed linear span of the set in . (We'll see the answer later. This result is fundamental.)  The open ball (of radius 1) in a normed space is the set Likewise, the closed ball is Show that the closed ball is the closure of the open ball. (Then argue that the ball of radius centered at satisfies the same property.)  Show that is the closed linear span in of the set , where is the sequence with a in the th position and otherwise.  Give an example of an inner product space and a dense subspace of which is of codimension in .  Prove that every finite dimensional subspace of a normed space is closed.   "
},
{
  "id": "norm-3-2-1",
  "level": "2",
  "url": "norm-3.html#norm-3-2-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "is the complex vector space of bounded sequences of complex numbers with entrywise addition and scalar multiplication. Verify that the infinity norm  meets the requirements of . "
},
{
  "id": "norm-3-2-2",
  "level": "2",
  "url": "norm-3.html#norm-3-2-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "is the complex vector space of absolutely summable sequences of complex numbers - that is, all sequences such that with entrywise addition and scalar multiplication. Show that the 1-norm  meets the requirements of . "
},
{
  "id": "norm-3-2-3",
  "level": "2",
  "url": "norm-3.html#norm-3-2-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "Prove that the parallelogram law does not hold for on the space . Conclude that there is no inner product on such that . "
},
{
  "id": "norm-3-2-4",
  "level": "2",
  "url": "norm-3.html#norm-3-2-4",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "Prove that, for , the set is a closed linear subspace of (see Table ). "
},
{
  "id": "norm-3-2-5",
  "level": "2",
  "url": "norm-3.html#norm-3-2-5",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "Show that the subspace of polynomials is not closed in in the supremum norm or in the inner product . "
},
{
  "id": "ex-norm-c0",
  "level": "2",
  "url": "norm-3.html#ex-norm-c0",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "denotes the subspace of consisting of all sequences which tend to 0 as . Prove that is closed in with respect to . "
},
{
  "id": "norm-3-2-7",
  "level": "2",
  "url": "norm-3.html#norm-3-2-7",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "Guess the closed linear span of the set in . (We'll see the answer later. This result is fundamental.) "
},
{
  "id": "ex-ball-closure",
  "level": "2",
  "url": "norm-3.html#ex-ball-closure",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "The open ball (of radius 1) in a normed space is the set Likewise, the closed ball is Show that the closed ball is the closure of the open ball. (Then argue that the ball of radius centered at satisfies the same property.) "
},
{
  "id": "norm-3-2-9",
  "level": "2",
  "url": "norm-3.html#norm-3-2-9",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "Show that is the closed linear span in of the set , where is the sequence with a in the th position and otherwise. "
},
{
  "id": "norm-3-2-10",
  "level": "2",
  "url": "norm-3.html#norm-3-2-10",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "Give an example of an inner product space and a dense subspace of which is of codimension in . "
},
{
  "id": "norm-3-2-11",
  "level": "2",
  "url": "norm-3.html#norm-3-2-11",
  "type": "Exercise",
  "number": "3.3.11",
  "title": "",
  "body": "Prove that every finite dimensional subspace of a normed space is closed. "
},
{
  "id": "hilbert-1",
  "level": "1",
  "url": "hilbert-1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Limits",
  "body": " Limits  With the inner product given by , the space of sequences of square summable functions acts much like . We can extend this analogy further. In Euclidean space, a sequence that looks convergent is convergent. (This shows up in theorems like \"Cauchy sequences are convergent\", e.g., and falls into a larger category we might refer to in a silly but accurate manner as a duck theorem - if it quacks like a duck, then...). Much of our intuition from real analysis is based on this property. Spaces on which sequences converge to points outside the space are very difficult to do analysis on! (Consider trying to do calculus on the rational numbers, for example.)  On the other hand, recall the space we defined in  . In , we constructed a sequence of vectors in that converged in but not in . That is, if we restricted our attention to the inner product space , we could not perform any analysis using limits, because we might leave the space.  As our ultimate interest is in examining function spaces, we can also consider an example in . A natural norm on is induced by the inner product , so that With respect the norm above, consider the sequence     It isn't difficult to show that the elements in this sequence of functions grow arbitrarily close as with respect to . It should also be clear from the figure above that this sequence of continuous functions is approaching a discontinuous function in the limit. (What is it?) That is, is evidently not closed with respect to .  We would very much like to work in spaces where limits make sense. So we'll introduce some machinery that will guarantee that this is the case.   Let be a metric space with distance function . A sequence in is called a Cauchy sequence if for every , there exists an integer so that implies that .  If every Cauchy sequence in converges to a limit in , then is called a complete metric space .   Some metric spaces come complete. The prototypical space is , where the result that Cauchy sequences are convergent is a standard test question in real analysis. (Can you prove it?). Completeness of implies completeness of . (Do it.) More complicated spaces take more work. We've already seen examples of spaces that are not complete.   The space is a complete metric space with the metric induced by the inner product .    We need to show that any Cauchy sequence in is convergent to another sequence. First, we propose a candidate for the limit of a Cauchy sequence of vectors in . To do so, we'll need to take advantage of the fact that vectors in are themselves sequences.  Consider the array we can construct by arranging the vectors as rows -   We are going to argue that the column sequences in the array above are convergent. Consider the -th column sequence . Choose Because is a Cauchy sequence of vectors, there exists some so that implies that . But since and each term in the sum is positive, we get when . This shows that is a Cauchy sequence in , which is a complete metric space, and so for some limit as . Let be the sequence of column limits. This is our candidate limit in for the sequence of vectors .  Let us show that . To do so, we will show that is in for some and use the vector space structure of . Let be given. Since is Cauchy, there exists so that for all . Noting again that the terms are positive, it is clear that for , We previously showed that the sequences converge to , so taking a limit as on the left-hand side of the inequalty gives This statement holds for all , and so letting tend to gives us which is to say that . Having shown that is in , we note that , which concludes this step of the proof.  The final step is to argue that the sequence . In the previous step, we showed that for a given , there exists so that implies that . Thus, converges to the sequence . Since every Cauchy sequence converges to a limit in , we conclude that is a complete metric space.   Show that , the space of bounded sequences of complex numbers with the supremum norm is complete.  We are now (finally) ready to define Hilbert spaces. The distinction between Hilbert spaces and inner product spaces is important to keep in mind.   A Hilbert space is an inner product space which is a complete metric space with respect to the metric induced by its inner product.    A Banach space is a normed space which is complete with respect to the metric induced by its norm.   As inner products induce norms, every Hilbert space is a Banach space. The converse statement is not true. Examples abound of complete normed spaces in which the parallelogram rule fails to hold (and thus there can exist no inner product that induces the norm.) In fact, our results to now show that is an example of a Banach space that is not a Hilbert space. Banach spaces are an area of wide interest in mathematics, but the lack of an inner product makes the structure much more delicate to parse. The central spaces of functional analysis are Hilbert spaces, where the inner product gives useful geometry not available in the more general setting of Banach spaces.  We'll continue by looking at perhaps the single most important Hilbert space of functions.  "
},
{
  "id": "def-cauchy-seq",
  "level": "2",
  "url": "hilbert-1.html#def-cauchy-seq",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " Let be a metric space with distance function . A sequence in is called a Cauchy sequence if for every , there exists an integer so that implies that .  If every Cauchy sequence in converges to a limit in , then is called a complete metric space .  "
},
{
  "id": "thm-ell2-complete",
  "level": "2",
  "url": "hilbert-1.html#thm-ell2-complete",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "",
  "body": " The space is a complete metric space with the metric induced by the inner product .  "
},
{
  "id": "hilbert-1-11",
  "level": "2",
  "url": "hilbert-1.html#hilbert-1-11",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " We need to show that any Cauchy sequence in is convergent to another sequence. First, we propose a candidate for the limit of a Cauchy sequence of vectors in . To do so, we'll need to take advantage of the fact that vectors in are themselves sequences.  Consider the array we can construct by arranging the vectors as rows -   We are going to argue that the column sequences in the array above are convergent. Consider the -th column sequence . Choose Because is a Cauchy sequence of vectors, there exists some so that implies that . But since and each term in the sum is positive, we get when . This shows that is a Cauchy sequence in , which is a complete metric space, and so for some limit as . Let be the sequence of column limits. This is our candidate limit in for the sequence of vectors .  Let us show that . To do so, we will show that is in for some and use the vector space structure of . Let be given. Since is Cauchy, there exists so that for all . Noting again that the terms are positive, it is clear that for , We previously showed that the sequences converge to , so taking a limit as on the left-hand side of the inequalty gives This statement holds for all , and so letting tend to gives us which is to say that . Having shown that is in , we note that , which concludes this step of the proof.  The final step is to argue that the sequence . In the previous step, we showed that for a given , there exists so that implies that . Thus, converges to the sequence . Since every Cauchy sequence converges to a limit in , we conclude that is a complete metric space.  "
},
{
  "id": "hilbert-1-12",
  "level": "2",
  "url": "hilbert-1.html#hilbert-1-12",
  "type": "Checkpoint",
  "number": "4.1.3",
  "title": "",
  "body": "Show that , the space of bounded sequences of complex numbers with the supremum norm is complete. "
},
{
  "id": "def-hilbert-space",
  "level": "2",
  "url": "hilbert-1.html#def-hilbert-space",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": " A Hilbert space is an inner product space which is a complete metric space with respect to the metric induced by its inner product.  "
},
{
  "id": "def-banach-space",
  "level": "2",
  "url": "hilbert-1.html#def-banach-space",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": " A Banach space is a normed space which is complete with respect to the metric induced by its norm.  "
},
{
  "id": "hilbert-2",
  "level": "1",
  "url": "hilbert-2.html",
  "type": "Section",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\(L^2[a,b]\\)<\/span>",
  "body": " We saw in the previous section that is an inner product space that is not complete. This is unfortunate, as the continuous functions are the foundation of approximation and analysis. The inner product is a natural analogue of the inner product in , considering the extension of sums to integral. It seems a shame to forgo working with the inner product and the space of continuous functions. But if we want to use them, we'll need to come up with a Hilbert space that contains , which is necessarily going to involve discontinuous functions (see the example at the beginning of the previous section, or the exerise in the problem section below).  The move from to provides an analogy - moving to infinite dimensions requires that we use square-summable sequences to get a well-defined inner product. The same turns out to be true here - sums become integrals, so we will work with the square-integrable functions , which we denote . That is, consists of those functions for which the integral of is finite. The sharp-eyed reader may notice that we have not written this in mathematics as and instead used the weasel-word integrable .  At issue is how we define the integral. The Riemann integral is the familiar that we learn in elementary calculus. Many more functions on will satisfy than , and yet even this space is incomplete. (Consider the sequence of Riemann integrable functions on attained recursively by introducing an additional discontinuity at the th rational number in under some enumeration of . The limit function is the Dirichlet function defined below.) We need a better integral. The Lesbesgue integral is significantly more challenging to develop than the Riemann integral, and we will not attempt that in this course. It is enough for us to accept that a more powerful notion of integration exists so that the space of square-integrable functions is complete with respect to .   Let . is the space of Lesbesgue measureable functions which are square-integrable - that is, with pointwise operations and inner product .   The condition that be Lesbesgue measurable is not terribly restrictive. One can study and use the theory of functions in a wide variety of physical and mathematical applications without ever needing to grapple with the oddities of non-measureable functions, which are quite difficult to construct. To get an idea of how bad a function can be and still be Lesbesgue integrable, consider the Dirichlet function  which integrates to 1 in the Lesbesgue integral, while the Riemann integral runs screaming in horror.  There is one issue that needs to be addressed when defining membership in a space with an integral condition - when should we consider two functions to be equal? If we take the function and move one point, say when and when , the functions behave identically under the integral and thus in the inner product and the metric in . More precisely, if two functions differ only at a finite set of points in , then and so by (1), and must be equal in .  So how much can two functions differ and still have the same integral? We define a subset of to be a null set if for any there exists a sequence of intervals with and - that is, is a null set if it is contained in the union of a set of intervals of arbitrarily small total length. Two functions are said to be equal almost everywhere if they differ only on a null set. In the Lesbesue integral, if and are equal almost everywhere, then the integral of is zero, and so and must be regarded as equal in . This indicates that the elements of are properly considered as equivalence classes of almost everywhere equal functions. In practice, we still refer to the elements as functions and treat equality as almost everywhere equality. This viewpoint does, however, mean that functions need only be defined almost everywhere to belong to . For example, is in despite the asymptote at .  One of the more useful properties of is that the continuous functions are a dense subspace (that is, every function can be approximated by a sequence of continuous functions). A typical approach in analysis is to show that some property hold on the continuous functions and then extend the result to by approximation.   is a Hilbert space.    is a dense subspace of .   The theorem above is a consequence of measure theory, which requires the development of the Lebesgue integral to justify. We must accept the result, for the moment, on faith. The interested reader should look at Lusin's Theorem and the Tietze Extension Theorem for a taste of a standard method of proof in the general case.  "
},
{
  "id": "hilbert-2-3",
  "level": "2",
  "url": "hilbert-2.html#hilbert-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square-integrable functions "
},
{
  "id": "hilbert-2-4",
  "level": "2",
  "url": "hilbert-2.html#hilbert-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lesbesgue integral "
},
{
  "id": "ex-L2",
  "level": "2",
  "url": "hilbert-2.html#ex-L2",
  "type": "Example",
  "number": "4.2.1",
  "title": "<span class=\"process-math\">\\(L^2(a,b)\\)<\/span>.",
  "body": " Let . is the space of Lesbesgue measureable functions which are square-integrable - that is, with pointwise operations and inner product .  "
},
{
  "id": "hilbert-2-8",
  "level": "2",
  "url": "hilbert-2.html#hilbert-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null set almost everywhere "
},
{
  "id": "hilbert-2-9",
  "level": "2",
  "url": "hilbert-2.html#hilbert-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dense "
},
{
  "id": "thm-L2-closed",
  "level": "2",
  "url": "hilbert-2.html#thm-L2-closed",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": " is a Hilbert space.  "
},
{
  "id": "thm-cont-dense",
  "level": "2",
  "url": "hilbert-2.html#thm-cont-dense",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": " is a dense subspace of .  "
},
{
  "id": "hilbert-3",
  "level": "1",
  "url": "hilbert-3.html",
  "type": "Section",
  "number": "4.3",
  "title": "The closest point property",
  "body": "The closest point property  One of the most useful ideas in linear algebra is projecting onto subspaces - if and is a subspace, then is the closest point in to in the sense that the orthogonal distance from to is minimized (this is also called least squares approximation).  The same idea holds true in Hilbert space and applies to vectors that are functions. This fact has deep consequences - that functions can be understood through the geometry of vectors is the soul of modern approaches to functional analysis.   A subset of a real or complex vector space is convex if, for all and all , the point .   We should think of convex sets as those that contain the line segments between all points and in .  First, we show that the closest point property holds - that a given vector has a unique closest point in any appropriately flat set in (like a linear subspace). (Compare the proof below with the standard approach in finite dimensions, e.g. in S. Axler's Linear Algebra Done Right (4th ed.), Chapter 6C).  Closest point property  Let be a non-empty closed convex set in a Hilbert space . For any , there is a unique point of which is closer to than any other point in . That is, there is a unique point such that    The proof will consist of two parts. First, we show that the infimum of distance between and is attained. (We should recall that the infimum itself exists is a consequence of the completeness of the real numbers, e.g. Theorem 2.6 .) Second, we show that this point is unique in .  Let We assumed that was not empty, and so must be some finite number. Since the infimum is a limit point, we can construct a sequence tending to . That is, for each integer , there exists some so that We now move from a sequence in norm to a sequence in by showing that is Cauchy in - that is, we need to show that is small. We first apply to the sequences and . For any , we have The term we are trying to bound is . On rearrangement, we get Now we will use the convexity of . Since , we know that , and hence that Consequently, It follows that is a Cauchy sequence in ; for a given (you should verify). Because is a Hilbert space, Cauchy sequences converge, and so . Since is closed, . On the one hand, this means that , since is an infimum. On the other hand, we know that for all , On taking , we get . We conclude that , and so is a closest point in to .  Now we show that is the unique closest point. Suppose that there is some with . Convexity gives that , and so Applying to and gives Thus, which gives uniqueness.   "
},
{
  "id": "def-convex",
  "level": "2",
  "url": "hilbert-3.html#def-convex",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": " A subset of a real or complex vector space is convex if, for all and all , the point .  "
},
{
  "id": "thm-closest-point",
  "level": "2",
  "url": "hilbert-3.html#thm-closest-point",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "Closest point property.",
  "body": "Closest point property  Let be a non-empty closed convex set in a Hilbert space . For any , there is a unique point of which is closer to than any other point in . That is, there is a unique point such that  "
},
{
  "id": "hilbert-3-8",
  "level": "2",
  "url": "hilbert-3.html#hilbert-3-8",
  "type": "Proof",
  "number": "4.3.1",
  "title": "",
  "body": " The proof will consist of two parts. First, we show that the infimum of distance between and is attained. (We should recall that the infimum itself exists is a consequence of the completeness of the real numbers, e.g. Theorem 2.6 .) Second, we show that this point is unique in .  Let We assumed that was not empty, and so must be some finite number. Since the infimum is a limit point, we can construct a sequence tending to . That is, for each integer , there exists some so that We now move from a sequence in norm to a sequence in by showing that is Cauchy in - that is, we need to show that is small. We first apply to the sequences and . For any , we have The term we are trying to bound is . On rearrangement, we get Now we will use the convexity of . Since , we know that , and hence that Consequently, It follows that is a Cauchy sequence in ; for a given (you should verify). Because is a Hilbert space, Cauchy sequences converge, and so . Since is closed, . On the one hand, this means that , since is an infimum. On the other hand, we know that for all , On taking , we get . We conclude that , and so is a closest point in to .  Now we show that is the unique closest point. Suppose that there is some with . Convexity gives that , and so Applying to and gives Thus, which gives uniqueness.  "
},
{
  "id": "hilbert-4",
  "level": "1",
  "url": "hilbert-4.html",
  "type": "Section",
  "number": "4.4",
  "title": "Exercises",
  "body": " Exercises   Prove that a closed subspace of a complete metric space is complete with respect to the induced metric. Conclude that is a Banach space. (See .)  Show that the sequence in given by the graph  is Cauchy but not convergent in .  Show that the normed space of is a Banach space.  Show that that the space of continously differentiable functions taking complex values on with inner product is not a Hilbert space (use the indefinite integrals of the functions in ).  Show that is not a Hilbert space.  For which real does the function belong to ? When defined, what is ?  Prove that the open and closed (unit) balls in a normed space are convex (see ).  Prove that the closure of a convex set in a normed space is convex.  Let be the Banach space with norm Show that does not have the closest point property by finding infinitely many points in the closed convex set which are at minimal distance from the origin.  Let be a non-empty closed convex set in a Hilbert space. Show that contains a unique vector of smallest norm that that for all .   "
},
{
  "id": "hilbert-4-2-1",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-1",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "Prove that a closed subspace of a complete metric space is complete with respect to the induced metric. Conclude that is a Banach space. (See .) "
},
{
  "id": "pr-3-2",
  "level": "2",
  "url": "hilbert-4.html#pr-3-2",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "Show that the sequence in given by the graph  is Cauchy but not convergent in . "
},
{
  "id": "hilbert-4-2-3",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-3",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "Show that the normed space of is a Banach space. "
},
{
  "id": "hilbert-4-2-4",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-4",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": "Show that that the space of continously differentiable functions taking complex values on with inner product is not a Hilbert space (use the indefinite integrals of the functions in ). "
},
{
  "id": "hilbert-4-2-5",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-5",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "Show that is not a Hilbert space. "
},
{
  "id": "hilbert-4-2-6",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-6",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": "For which real does the function belong to ? When defined, what is ? "
},
{
  "id": "hilbert-4-2-7",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-7",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "Prove that the open and closed (unit) balls in a normed space are convex (see ). "
},
{
  "id": "hilbert-4-2-8",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-8",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "Prove that the closure of a convex set in a normed space is convex. "
},
{
  "id": "hilbert-4-2-9",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-9",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": "Let be the Banach space with norm Show that does not have the closest point property by finding infinitely many points in the closed convex set which are at minimal distance from the origin. "
},
{
  "id": "hilbert-4-2-10",
  "level": "2",
  "url": "hilbert-4.html#hilbert-4-2-10",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": "Let be a non-empty closed convex set in a Hilbert space. Show that contains a unique vector of smallest norm that that for all . "
},
{
  "id": "hilbert-7-2",
  "level": "1",
  "url": "hilbert-7-2.html",
  "type": "Section",
  "number": "5.1",
  "title": "Geometry in Hilbert space",
  "body": " Geometry in Hilbert space  As we discussed in the introductory chapter, , one of the key ideas of finite dimensional linear algebra is to use a basis for a vector space to move back and forth between the vectors themselves (say ) and their coordinate representations with respect to those bases. This move lets us consider a vector space of dimension as essentially just a renaming of Euclidean space . We are now ready to try to capture this geometry in the context of Hilbert space.   Vectors in an inner product space are orthogonal , denoted , if .  A family in is called an orthogonal system if when . If further, for all , then is called an orthonormal system .  An orthonormal system is called an orthonormal sequence if it can be indexed by .   Make note: we have not defined what it means to be a basis yet in the context of Hilbert spaces - that remains to be developed later in this chapter. Note also that a system index by can be reindexed in terms of , and so we can take a typical orthonormal system to be indexed by without loss of generality.   In the standard basis vectors constitute an orthonormal system; so does any subset of them.  In , the standard unit vectors form an orthonormal sequence, where has a 1 in the th position and 0s elsewhere.  In , one orthonormal sequence is given by in the inner product . An alternative orthonormal sequence in is given by the family of functions    These families form the beginnings of Fourier analysis , which motivates the following definition. (Compare to .)   If is an orthonormal sequence in a Hilbert space then for any , the inner product is the th Fourier coefficent of with respect to . The Fourier series of with respect to is the series   At this point, this is only a formal sum in a formal definition. We want to understand the extent to which orthogonal systems can play the role of coordinate systems in finite dimensions, with the ultimate idea of working in coordinates. First, given our definition of orthogonality, we can generalize the Pythagorean theorem.   If is a (finite) orthogonal system in an inner product space, then   Prove .  The basic properties of orthogonal expansions are mainly derived from the following geometric identity. Note that it applies to finite orthonormal systems.   Let be an orthonormal system in an inner product space , let and suppose that . Then where .    By , Then    Now suppose that and the orthonormal system are fixed. Varying on the expression will trace out the linear span of the (as it runs through all linear combinations). Since are fixed, implies that quantity is minimized when for (killing the middle term). This gives the following theorem.   Let be an orthonormal system in an inner product space and let . The closest point of to is and the distance from to is given by   We finish with a corollary that resembles (and recovers) the orthonormal expansion of a vector in .   If then   In let for all . Show that is an orthonormal system in and show that the polynomial of degree 1 which is closest to the function is given by . What is ?  "
},
{
  "id": "def-orthogonal-system",
  "level": "2",
  "url": "hilbert-7-2.html#def-orthogonal-system",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": " Vectors in an inner product space are orthogonal , denoted , if .  A family in is called an orthogonal system if when . If further, for all , then is called an orthonormal system .  An orthonormal system is called an orthonormal sequence if it can be indexed by .  "
},
{
  "id": "hilbert-7-2-5",
  "level": "2",
  "url": "hilbert-7-2.html#hilbert-7-2-5",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": " In the standard basis vectors constitute an orthonormal system; so does any subset of them.  In , the standard unit vectors form an orthonormal sequence, where has a 1 in the th position and 0s elsewhere.  In , one orthonormal sequence is given by in the inner product . An alternative orthonormal sequence in is given by the family of functions   "
},
{
  "id": "hilbert-7-2-6",
  "level": "2",
  "url": "hilbert-7-2.html#hilbert-7-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier analysis "
},
{
  "id": "def-fourier",
  "level": "2",
  "url": "hilbert-7-2.html#def-fourier",
  "type": "Definition",
  "number": "5.1.3",
  "title": "",
  "body": " If is an orthonormal sequence in a Hilbert space then for any , the inner product is the th Fourier coefficent of with respect to . The Fourier series of with respect to is the series  "
},
{
  "id": "thm-ortho-pythagorean",
  "level": "2",
  "url": "hilbert-7-2.html#thm-ortho-pythagorean",
  "type": "Theorem",
  "number": "5.1.4",
  "title": "",
  "body": " If is a (finite) orthogonal system in an inner product space, then  "
},
{
  "id": "hilbert-7-2-10",
  "level": "2",
  "url": "hilbert-7-2.html#hilbert-7-2-10",
  "type": "Checkpoint",
  "number": "5.1.5",
  "title": "",
  "body": "Prove . "
},
{
  "id": "lemma-ortho",
  "level": "2",
  "url": "hilbert-7-2.html#lemma-ortho",
  "type": "Lemma",
  "number": "5.1.6",
  "title": "",
  "body": " Let be an orthonormal system in an inner product space , let and suppose that . Then where .  "
},
{
  "id": "hilbert-7-2-13",
  "level": "2",
  "url": "hilbert-7-2.html#hilbert-7-2-13",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": " By , Then   "
},
{
  "id": "thm-ortho-closest-finite",
  "level": "2",
  "url": "hilbert-7-2.html#thm-ortho-closest-finite",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "",
  "body": " Let be an orthonormal system in an inner product space and let . The closest point of to is and the distance from to is given by  "
},
{
  "id": "hilbert-7-2-17",
  "level": "2",
  "url": "hilbert-7-2.html#hilbert-7-2-17",
  "type": "Corollary",
  "number": "5.1.8",
  "title": "",
  "body": " If then  "
},
{
  "id": "hilbert-7-2-18",
  "level": "2",
  "url": "hilbert-7-2.html#hilbert-7-2-18",
  "type": "Checkpoint",
  "number": "5.1.9",
  "title": "",
  "body": "In let for all . Show that is an orthonormal system in and show that the polynomial of degree 1 which is closest to the function is given by . What is ? "
},
{
  "id": "ortho-2",
  "level": "1",
  "url": "ortho-2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Bessel’s inequality",
  "body": " Bessel's inequality  The following inequality is one of the bedrock observations of Hilbert spaces. With it, we can begin the move from finite to infinite sums of vectors as appear in orthogonal expansions.  Bessel's inequality  If is an orthonormal sequence in an inner product space then, for any ,    We will show the inequality holds for all finite and then apply limits.  For , let be the finite series . Noting that , we can apply to get Rearranging gives for all that Thus in the limit as we have the result.   Our goal now is to show that the Fourier series actually represents the vector , and so we need to fix a notion of what it means for an infinite series of vectors to converge in a normed space. The most obvious idea follows directly from the scalar case - we will say that a series conveges to a vector if the partial sums approach in norm.   Let be a normed space, and let for be a sequence. We say that converges and has sum , and so write , if   That is, as .  One of the difficulties of Banach space is the lack of geometry induced by an inner product - it is difficult to tell in general when a series converges in Banach space. In Hilbert space, there is a neat characterization in terms of the coefficients. (You should once again be reminded of , which should continue to make you suspicious.)   Let be an orthonormal sequence in a Hilbert space and let . Then converges in if and only if    Suppose that . For a given and any index beyond , orthogonality gives Now let . Continuity of the inner product gives Then using the equivalence above in Bessel's inequality gives  Suppose that the coefficient sequence satisfies . Then define a sequence by For , the Pythagorean theorem gives Thus, is a Cauchy sequence in and therefore converges in by completeness.   "
},
{
  "id": "thm-bessel",
  "level": "2",
  "url": "ortho-2.html#thm-bessel",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "Bessel’s inequality.",
  "body": "Bessel's inequality  If is an orthonormal sequence in an inner product space then, for any ,  "
},
{
  "id": "ortho-2-4",
  "level": "2",
  "url": "ortho-2.html#ortho-2-4",
  "type": "Proof",
  "number": "5.2.1",
  "title": "",
  "body": " We will show the inequality holds for all finite and then apply limits.  For , let be the finite series . Noting that , we can apply to get Rearranging gives for all that Thus in the limit as we have the result.  "
},
{
  "id": "def-convergence",
  "level": "2",
  "url": "ortho-2.html#def-convergence",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": " Let be a normed space, and let for be a sequence. We say that converges and has sum , and so write , if  "
},
{
  "id": "thm-l2-coeffs",
  "level": "2",
  "url": "ortho-2.html#thm-l2-coeffs",
  "type": "Theorem",
  "number": "5.2.3",
  "title": "",
  "body": " Let be an orthonormal sequence in a Hilbert space and let . Then converges in if and only if  "
},
{
  "id": "ortho-2-10",
  "level": "2",
  "url": "ortho-2.html#ortho-2-10",
  "type": "Proof",
  "number": "5.2.2",
  "title": "",
  "body": " Suppose that . For a given and any index beyond , orthogonality gives Now let . Continuity of the inner product gives Then using the equivalence above in Bessel's inequality gives  Suppose that the coefficient sequence satisfies . Then define a sequence by For , the Pythagorean theorem gives Thus, is a Cauchy sequence in and therefore converges in by completeness.  "
},
{
  "id": "ortho-3",
  "level": "1",
  "url": "ortho-3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Modes of convergence",
  "body": " Modes of convergence  A point that we need to pay attention to in more abstract spaces than is precisely what we mean by convegence. In the previous section, we discussed convergence in - i.e. given a sequence in , what it means for Because this mode of -convergence is in norm and incorporates information from the entire domain, we cannot conclude that for a given , the series Series that satisfy the above notion are said to converge pointwise , and these two ideas are not equivalent. In fact, a great deal of the nuance of graduate real analysis is in exploring the differences between these and other modes of convergence, usually in the guise of measure theory (here, an extremely well presented introduction can be found in S. Axler' Measure, Integration, and Real Analysis or G. Folland's Real Analysis: Modern Techniques and Their Applications ).  Because series convergence is really just convergence of the sequence of partial sums in the senses that we are discussing, we'll look at the difference in convergence modes for several sequences. First, consider the sequence of functions given by   Show that for all , . Show that the sequence does not converge to . Conclude that pointwise convergence does not imply convergence.  Now consider the sequence of functions given by  Sketch a graph of . Show that the sequence does not converge. Show that , and conclude that in Conclude that convergence does not imply pointwise convergence.  The upshot of this discussion is: be cautious. The same problems beset the great mathematicians of the 19th century, so let us strive to learn from their struggles.  "
},
{
  "id": "ortho-3-2",
  "level": "2",
  "url": "ortho-3.html#ortho-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converge pointwise measure theory "
},
{
  "id": "ortho-3-4",
  "level": "2",
  "url": "ortho-3.html#ortho-3-4",
  "type": "Checkpoint",
  "number": "5.3.1",
  "title": "",
  "body": "Show that for all , . Show that the sequence does not converge to . Conclude that pointwise convergence does not imply convergence. "
},
{
  "id": "ortho-3-6",
  "level": "2",
  "url": "ortho-3.html#ortho-3-6",
  "type": "Checkpoint",
  "number": "5.3.2",
  "title": "",
  "body": "Sketch a graph of . Show that the sequence does not converge. Show that , and conclude that in Conclude that convergence does not imply pointwise convergence. "
},
{
  "id": "ortho-4",
  "level": "1",
  "url": "ortho-4.html",
  "type": "Section",
  "number": "5.4",
  "title": "Complete orthonormal sequences",
  "body": "Complete orthonormal sequences  We are now ready to establish a generalization of coordinates and basis appropriate to Hilbert space. That is, we would like to make sense of finding a coordinate expression for a vector in a Hilbert space . The primary geometric difficulty that we have to wrestle with is that we have infinite directions in which extra stuff can hide. We need to know that the orthonormal sequence we're expanding against doesn't leave any directions hidden.  Given an orthonormal sequence , we would like to write (in parallel with )  and guarantee that the right hand side makes sense; the series converges to some vector in . But there is no way to know without further assumptions on the orthonormal sequence that there aren't directions that are hidden that might make the equation false. That is, we don't know if the limit of the right hand side is actually .  The issue of when a Fourier series is equal to the object that generates it is delicate enough that in practice, mathematicians often use instead of to denote the relationship; that is, means that has the given Fourier representation, but makes no claims on equality (whatever that might mean).  We can see the issue if we look at an expansion of a vector with respect to the standard orthonormal sequence (much like the standard unit vectors) where has a 1 in the th position and 0s elsewhere. From this, construct a shifted sequence . Then remains an infinite orthonormal sequence in . Now choose . Then  More generally, let us look at the error between and an orthonormal expansion in terms of an orthonormal sequence : Then for each , linearity of the inner product gives That is, the vector is orthogonal to each member of the orthonormal sequence. (This property is used to compute the distance from a vector to a subspace in finite dimensions.) So if we know that the only vector orthogonal to every is the zero vector, then we can infer that , which makes the representation valid.   An orthonormal sequence in a Hilbert space is complete if the only member of which is orthogonal to every is the zero vector.   We are ready to prove the Hilbert space analogue of .   Let be a complete orthonormal sequence in a Hilbert space . For any , and    As above, compute Then for each , linearity of the inner product gives That is, the vector is orthogonal to each member of the orthonormal sequence. Since by hypothesis is complete, we deduce the first statement.  By , for any , On letting , continuity of the norm gives the second statement.   We have finally arrived at the notion of a basis in a Hilbert space (indexed by ). A complete orthonormal sequence in is also called an orthonormal basis of . The issue with identifying a basis is typically not orthogonality or norm, but instead completeness. After all, in infinite dimensions, there are lots of places to hide. (The study of bases for infinite dimensional spaces is complicated; see this article on the notion of a Schauder basis for a first look into the details.)  In finite dimensions, a basis is a minimal spanning set - that is, the span of a basis is the entire space. A similar fact holds in Hilbert space, with the caveat that we have to work with the closed linear span.   Let be an orthonormal sequence in a Hilbert space . The following are equivalent:   is complete;   ;       and follow immediately from . As series convergence is convergence of the sequence of partial sums, and each partial sum is in , closure gives for all .  : Suppose that is not complete, which is to say that there exists some non-zero vector with for all . Then , but for all and so which contradicts .  : Suppose that holds. Let be any vector that is orthogonal to every . Now construct the set of vectors orthogonal to : Linearity of the inner product gives that is a subspace of , and continuity of the inner product gives that is closed. Also, by assumption, every , and thus .and so (2) implies that . But then in particular , and so by the definition of , which gives that . Thus, is complete.   While most of the commonly encountered Hilbert spaces possess complete orthonormal sequences, some do not. Fortunately, similar statements to the above apply to orthonormal systems as well, though working with uncountably indexed sets is not something that most readers will encounter until graduate real analysis. It will be sufficient for us to mostly restrict our attention to the rather more easily conceptualized case of sequences.   A Hilbert space is called separable if it contains a complete orthonormal sequence (indexed by or finite).   In the same way that we know from linear algebra that every (complex) finite dimensional Hilbert space is isomorphic to , so that we think of one vector space of a given dimension with different labelings (see ), we have already met the one separable Hilbert space of infinite dimension , namely (and at last our suspicions are confirmed). The next set of arguments will make this rigorous.   A mapping between Hilbert spaces is a unitary operator if it is linear and bijective and preserves inner products. That is, satisfies for all    Let be a separable Hilbert space. Then either is isomorphic to for some or is isomorphic to .    Suppose that contains a finite complete orthonormal sequence . For any , find the error vector Linearity of the inner product gives for all and so . Thus is an orthonormal basis for . Now define the operator by Then is linear and bijective. From the fact that , we infer that for all Thus is a unitary operator, and so is isomorphic to .  On the other hand, suppose that contains a complete orthonormal sequence . Define the operator by where . By (3), and moreover for all . As is defined in terms of the inner product, it is clearly linear. If , then by the series converges to a point in and by definition . Thus is surjective. Hence is a unitary operator, and so is isomorphic to .   As in undergraduate linear algebra, one might feel a bit of a letdown here. However, just as in finite dimensions, taking different views of the same space provides valuable insight into the objects being studied. In finite dimensions, for example, the space of polynomials of degree at most is isomorphic to but is also a set of functions with properties that interact with the geometry of . Both the vector space properties and the functional properties are important - what the isomorphism provides is a set of properties that the space carries by relation with Euclidean space. In the same way, while all separable Hilbert spaces can be thought of as in some sense, often what we are interested in is the relationship between the functions themselves as functions and the geometry induced by their Fourier (coordinate) representations.  "
},
{
  "id": "def-complete-ons",
  "level": "2",
  "url": "ortho-4.html#def-complete-ons",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": " An orthonormal sequence in a Hilbert space is complete if the only member of which is orthogonal to every is the zero vector.  "
},
{
  "id": "thm-infinite-coords",
  "level": "2",
  "url": "ortho-4.html#thm-infinite-coords",
  "type": "Theorem",
  "number": "5.4.2",
  "title": "",
  "body": " Let be a complete orthonormal sequence in a Hilbert space . For any , and  "
},
{
  "id": "ortho-4-10",
  "level": "2",
  "url": "ortho-4.html#ortho-4-10",
  "type": "Proof",
  "number": "5.4.1",
  "title": "",
  "body": " As above, compute Then for each , linearity of the inner product gives That is, the vector is orthogonal to each member of the orthonormal sequence. Since by hypothesis is complete, we deduce the first statement.  By , for any , On letting , continuity of the norm gives the second statement.  "
},
{
  "id": "ortho-4-11",
  "level": "2",
  "url": "ortho-4.html#ortho-4-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthonormal basis "
},
{
  "id": "thm-hilbert-span",
  "level": "2",
  "url": "ortho-4.html#thm-hilbert-span",
  "type": "Theorem",
  "number": "5.4.3",
  "title": "",
  "body": " Let be an orthonormal sequence in a Hilbert space . The following are equivalent:   is complete;   ;    "
},
{
  "id": "ortho-4-14",
  "level": "2",
  "url": "ortho-4.html#ortho-4-14",
  "type": "Proof",
  "number": "5.4.2",
  "title": "",
  "body": "  and follow immediately from . As series convergence is convergence of the sequence of partial sums, and each partial sum is in , closure gives for all .  : Suppose that is not complete, which is to say that there exists some non-zero vector with for all . Then , but for all and so which contradicts .  : Suppose that holds. Let be any vector that is orthogonal to every . Now construct the set of vectors orthogonal to : Linearity of the inner product gives that is a subspace of , and continuity of the inner product gives that is closed. Also, by assumption, every , and thus .and so (2) implies that . But then in particular , and so by the definition of , which gives that . Thus, is complete.  "
},
{
  "id": "def-separable",
  "level": "2",
  "url": "ortho-4.html#def-separable",
  "type": "Definition",
  "number": "5.4.4",
  "title": "",
  "body": " A Hilbert space is called separable if it contains a complete orthonormal sequence (indexed by or finite).  "
},
{
  "id": "def-unitary",
  "level": "2",
  "url": "ortho-4.html#def-unitary",
  "type": "Definition",
  "number": "5.4.5",
  "title": "",
  "body": " A mapping between Hilbert spaces is a unitary operator if it is linear and bijective and preserves inner products. That is, satisfies for all  "
},
{
  "id": "ortho-4-19",
  "level": "2",
  "url": "ortho-4.html#ortho-4-19",
  "type": "Theorem",
  "number": "5.4.6",
  "title": "",
  "body": " Let be a separable Hilbert space. Then either is isomorphic to for some or is isomorphic to .  "
},
{
  "id": "ortho-4-20",
  "level": "2",
  "url": "ortho-4.html#ortho-4-20",
  "type": "Proof",
  "number": "5.4.3",
  "title": "",
  "body": " Suppose that contains a finite complete orthonormal sequence . For any , find the error vector Linearity of the inner product gives for all and so . Thus is an orthonormal basis for . Now define the operator by Then is linear and bijective. From the fact that , we infer that for all Thus is a unitary operator, and so is isomorphic to .  On the other hand, suppose that contains a complete orthonormal sequence . Define the operator by where . By (3), and moreover for all . As is defined in terms of the inner product, it is clearly linear. If , then by the series converges to a point in and by definition . Thus is surjective. Hence is a unitary operator, and so is isomorphic to .  "
},
{
  "id": "ortho-5",
  "level": "1",
  "url": "ortho-5.html",
  "type": "Section",
  "number": "5.5",
  "title": "Orthogonal complements",
  "body": "Orthogonal complements  One of the most useful properties of orthogonality in Euclidean space is to decompose the space into orthogonal subspaces - this allows vectors to be expressed uniquely as sums of components lying in each subspace, for example. (You will have done this implicitly when studying projection onto subspaces, for example.) The same geometric properties hold in Hilbert space.   The orthogonal complement of a subset of a Hilbert space is the set    Let Describe in .  It is a useful fact that orthogonal complements are always closed subspaces relative to the larger Hilbert space.   For any set , the orthogonal complement is a closed linear subspace of .   Exercise. Elements in an orthgonal complement of a subspace are precisely those that satisfy a sort of least distance property - that is, perturbing by any vector in doesn't get you any closed to . This leads to a nice norm characterization of the orthogonal complement.  Let be a linear subspace of an inner produt space and let be a vector in . Then if and only if     ( ): If , then for any , and are orthogonal. Then gives  ( : Now suppose that the inequality in holds. Pick an arbitrary and a scalar . As is a linear subspace, , and so Now we leverage inner product geometry. Notice that Combining this observation with the previous inequality and canceling the , we get for all , Now, we'll drop the real part of the inner product. Let be a unimodular constant so that (if you don't see why such a constant should exist, you should think about it). Then the inequality above holds in particular for vectors of the form where , which gives We can rearrange this into for all . Letting , we conclude that for all , and so .   Now we can produce the Hilbert space analogue of decomposing a vector into orthogonal components with repect to orthogonal subspaces.   Let be a closed linear subspace of a Hilbert space , and suppose that . Then there exists and so that .    The main idea of the proof is to take to be the closest point to in . That is, following , is the point in so that for all . Now define so that . Now, for any , we know that and so since is the closest point to , we have That is, for all , we have By , we conclude that .  An immediate consequence is that the orthogonal complement of an orthogonal complement of a closed linear subpsace is the space itself.  If is a closed linear subspace of a Hilbert space , then .    Every element of is orthogonal to by definition, and so . On the other hand, let . Then by , where and . Because , we have . But then and so . This means that and thus and . The two-way inclusion proves the claim.    Let be subspaces of a vector space . is the direct sum of and , denoted , if and every vector in can be written as a sum of a vector in and a vector in . If is an inner product space and (in the sense that for then is the orthogonal direct sum of and .   It is immediate that for any closed linear subspace of a Hilbert space that is the orthogonal direct sum .  Show that can be orthongonally decomposed into the direct sum of its subspaces of even and odd functions.  "
},
{
  "id": "def-orthocomplement",
  "level": "2",
  "url": "ortho-5.html#def-orthocomplement",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": " The orthogonal complement of a subset of a Hilbert space is the set   "
},
{
  "id": "ortho-5-4",
  "level": "2",
  "url": "ortho-5.html#ortho-5-4",
  "type": "Checkpoint",
  "number": "5.5.2",
  "title": "",
  "body": "Let Describe in . "
},
{
  "id": "thm-perp-closed",
  "level": "2",
  "url": "ortho-5.html#thm-perp-closed",
  "type": "Theorem",
  "number": "5.5.3",
  "title": "",
  "body": " For any set , the orthogonal complement is a closed linear subspace of .  "
},
{
  "id": "ortho-5-7",
  "level": "2",
  "url": "ortho-5.html#ortho-5-7",
  "type": "Proof",
  "number": "5.5.1",
  "title": "",
  "body": "Exercise. "
},
{
  "id": "lemma-norm-ortho",
  "level": "2",
  "url": "ortho-5.html#lemma-norm-ortho",
  "type": "Lemma",
  "number": "5.5.4",
  "title": "",
  "body": " Let be a linear subspace of an inner produt space and let be a vector in . Then if and only if   "
},
{
  "id": "ortho-5-13",
  "level": "2",
  "url": "ortho-5.html#ortho-5-13",
  "type": "Proof",
  "number": "5.5.2",
  "title": "",
  "body": " ( ): If , then for any , and are orthogonal. Then gives  ( : Now suppose that the inequality in holds. Pick an arbitrary and a scalar . As is a linear subspace, , and so Now we leverage inner product geometry. Notice that Combining this observation with the previous inequality and canceling the , we get for all , Now, we'll drop the real part of the inner product. Let be a unimodular constant so that (if you don't see why such a constant should exist, you should think about it). Then the inequality above holds in particular for vectors of the form where , which gives We can rearrange this into for all . Letting , we conclude that for all , and so .  "
},
{
  "id": "thm-hilbert-decomp",
  "level": "2",
  "url": "ortho-5.html#thm-hilbert-decomp",
  "type": "Theorem",
  "number": "5.5.5",
  "title": "",
  "body": " Let be a closed linear subspace of a Hilbert space , and suppose that . Then there exists and so that .  "
},
{
  "id": "ortho-5-16",
  "level": "2",
  "url": "ortho-5.html#ortho-5-16",
  "type": "Proof",
  "number": "5.5.3",
  "title": "",
  "body": " The main idea of the proof is to take to be the closest point to in . That is, following , is the point in so that for all . Now define so that . Now, for any , we know that and so since is the closest point to , we have That is, for all , we have By , we conclude that .  "
},
{
  "id": "corr-perp-perp",
  "level": "2",
  "url": "ortho-5.html#corr-perp-perp",
  "type": "Corollary",
  "number": "5.5.6",
  "title": "",
  "body": " If is a closed linear subspace of a Hilbert space , then .  "
},
{
  "id": "ortho-5-18",
  "level": "2",
  "url": "ortho-5.html#ortho-5-18",
  "type": "Proof",
  "number": "5.5.4",
  "title": "",
  "body": " Every element of is orthogonal to by definition, and so . On the other hand, let . Then by , where and . Because , we have . But then and so . This means that and thus and . The two-way inclusion proves the claim.  "
},
{
  "id": "def-direct-sum",
  "level": "2",
  "url": "ortho-5.html#def-direct-sum",
  "type": "Definition",
  "number": "5.5.7",
  "title": "",
  "body": " Let be subspaces of a vector space . is the direct sum of and , denoted , if and every vector in can be written as a sum of a vector in and a vector in . If is an inner product space and (in the sense that for then is the orthogonal direct sum of and .  "
},
{
  "id": "ortho-5-21",
  "level": "2",
  "url": "ortho-5.html#ortho-5-21",
  "type": "Checkpoint",
  "number": "5.5.8",
  "title": "",
  "body": "Show that can be orthongonally decomposed into the direct sum of its subspaces of even and odd functions. "
},
{
  "id": "ortho-ex",
  "level": "1",
  "url": "ortho-ex.html",
  "type": "Section",
  "number": "5.6",
  "title": "Exercises",
  "body": "Exercises   Find a vector in that is orthogonal to and where .  Consider the sequence of functions given by for , (notice that this includes the reciprocals of the monomials). Show that is an orthonormal sequence in (recall the definition from the Table ).  Consider the family of functions given by where and the index . (Notice that here we are dealing with an uncountable index set, and so this is not a sequence). Show that is an orthonormal system in (recall the definition from the Table ).  Let be elements in the complex unit disk . Define functions by  (the first term in is a special type of function called an automorphism of the disk ). Show that is an orthonormal system in (recall the definition from the Table ).  Let be a complex number off the unit circle, i.e. . Find the Fourier coefficients of the function given by with respect to the orthonormal sequence where . (You need to consider the interior and exterior of the disk separately.)  This exercise extends to infinite dimensions the Gram-Schmidt process. Let be a sequence of linearly independent vectors in an inner product space . Define new vectors by the recursive relation Show that is an orthonormal sequence with the same closed linear span as .  The first three Legendre polynomials are given by Show that these are scalar multiples of the orthonormal set generated by applying the Gram-Schmidt process to the vectors in .  Find the closest point to in the linear span of and , where .  Let be a Hilbert space, and let be a closed linear subspace of ; that is, is a Hilbert space with respect to restricted inner product from . Let be a complete orthonormal sequence in . Show that for any , the best approximation to in is (Compare to the formula for projecting onto a subspace in Euclidean space .)  Prove that the standard orthonormal sequence of coordinate vectors is complete in .  Prove that the orthonormal sequence of mononomials with is complete in .  Show that for a fixed , the orthogonal complement in of the space given by is the space of polynomials of degree less than .   "
},
{
  "id": "ortho-ex-2-1",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-1",
  "type": "Exercise",
  "number": "5.6.1",
  "title": "",
  "body": "Find a vector in that is orthogonal to and where . "
},
{
  "id": "ortho-ex-2-2",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-2",
  "type": "Exercise",
  "number": "5.6.2",
  "title": "",
  "body": "Consider the sequence of functions given by for , (notice that this includes the reciprocals of the monomials). Show that is an orthonormal sequence in (recall the definition from the Table ). "
},
{
  "id": "ortho-ex-2-3",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-3",
  "type": "Exercise",
  "number": "5.6.3",
  "title": "",
  "body": "Consider the family of functions given by where and the index . (Notice that here we are dealing with an uncountable index set, and so this is not a sequence). Show that is an orthonormal system in (recall the definition from the Table ). "
},
{
  "id": "ortho-ex-2-4",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-4",
  "type": "Exercise",
  "number": "5.6.4",
  "title": "",
  "body": "Let be elements in the complex unit disk . Define functions by  (the first term in is a special type of function called an automorphism of the disk ). Show that is an orthonormal system in (recall the definition from the Table ). "
},
{
  "id": "ortho-ex-2-5",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-5",
  "type": "Exercise",
  "number": "5.6.5",
  "title": "",
  "body": "Let be a complex number off the unit circle, i.e. . Find the Fourier coefficients of the function given by with respect to the orthonormal sequence where . (You need to consider the interior and exterior of the disk separately.) "
},
{
  "id": "ortho-ex-2-6",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-6",
  "type": "Exercise",
  "number": "5.6.6",
  "title": "",
  "body": "This exercise extends to infinite dimensions the Gram-Schmidt process. Let be a sequence of linearly independent vectors in an inner product space . Define new vectors by the recursive relation Show that is an orthonormal sequence with the same closed linear span as . "
},
{
  "id": "ortho-ex-2-7",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-7",
  "type": "Exercise",
  "number": "5.6.7",
  "title": "",
  "body": "The first three Legendre polynomials are given by Show that these are scalar multiples of the orthonormal set generated by applying the Gram-Schmidt process to the vectors in . "
},
{
  "id": "ortho-ex-2-8",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-8",
  "type": "Exercise",
  "number": "5.6.8",
  "title": "",
  "body": "Find the closest point to in the linear span of and , where . "
},
{
  "id": "ortho-ex-2-9",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-9",
  "type": "Exercise",
  "number": "5.6.9",
  "title": "",
  "body": "Let be a Hilbert space, and let be a closed linear subspace of ; that is, is a Hilbert space with respect to restricted inner product from . Let be a complete orthonormal sequence in . Show that for any , the best approximation to in is (Compare to the formula for projecting onto a subspace in Euclidean space .) "
},
{
  "id": "ortho-ex-2-10",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-10",
  "type": "Exercise",
  "number": "5.6.10",
  "title": "",
  "body": "Prove that the standard orthonormal sequence of coordinate vectors is complete in . "
},
{
  "id": "ortho-ex-2-11",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-11",
  "type": "Exercise",
  "number": "5.6.11",
  "title": "",
  "body": "Prove that the orthonormal sequence of mononomials with is complete in . "
},
{
  "id": "ortho-ex-2-12",
  "level": "2",
  "url": "ortho-ex.html#ortho-ex-2-12",
  "type": "Exercise",
  "number": "5.6.12",
  "title": "",
  "body": "Show that for a fixed , the orthogonal complement in of the space given by is the space of polynomials of degree less than . "
},
{
  "id": "fourier-1",
  "level": "1",
  "url": "fourier-1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Convolution",
  "body": " Convolution  This chapter will establish the convergence of classical Fourier series in . To do so, we'll use a technique that is one of the basic tools of analysis, the convolution of two functions.   Let and be integrable functions on . The convolution (or convolution product) of and is the function defined by    Let's look at an example that illustrates something of what a convolution can do. Suppose that we're working on a symmetric interval , and for a constant , define a function by Notice that has integral 1 on . Extend to be periodic with period . What will convolving with do? Notice that That is, at each , the value of is the average value of on the -neighborhood near . This has the effect of smoothing the graph of . (Indeed, this smoothing is one of the primary applications of convolution in many fields, including signals and circuits.)  Natural choices for smoothing functions are similar to the that we defined above - we'd like the integral to be 1, and we typically want to be able to concentrate the area of very close to , so that is close to 0 in value away from and is very close to . (Here, one might consider investigating mollifiers .)  Construction of functions via convolution is a frequent approach to solving problems in the fields of harmonic and complex analysis. (See, for example, the solution to the Dirichlet problem on the disk via convolution of a function with the Poisson kernel .)  "
},
{
  "id": "fourier-1-2",
  "level": "2",
  "url": "fourier-1.html#fourier-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convolution "
},
{
  "id": "def-convolution",
  "level": "2",
  "url": "fourier-1.html#def-convolution",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": " Let and be integrable functions on . The convolution (or convolution product) of and is the function defined by   "
},
{
  "id": "fourier-2",
  "level": "1",
  "url": "fourier-2.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Fejér kernel",
  "body": " The Fejér kernel  Our goal is to establish that classical Fourier series converge, so we need a tool that involves the terms of such series. We're going to be constructing functions by convolution with a function called the Fejér kernel , which is built out of the same complex exponentials that appear in classical Fourier series.   The Fejér kernel is given by    Every good proof hinges on a set of technical lemmas. Here are those that we need to prove that Fourier series converge.   For any that is not an integer multiple of ,     Let and for . Then and Then, by , we can write Proceed by elbow grease. We calculate   Now, we are ready to convert these piles of into sines. First, note that and so . For the term in the numerator, notice that   Then putting the pieces together, we conclude that and so    We can now establish some of the good properties of the Fejér kernel that make it useful in applications involving Fourier series. Essentially, we want to show that has properties similar to the function that we explored in the previous section.   The function satisfies the following properties:  ;     For all with ,       Property 1 follows directly from the form of given in for any not an integer multiple of and at those points by continuity.  To see property 2, observe that Since , expanding the sum and integrating gives   The third property leverages the characterization of in terms of sine functions. Suppose . If or , then By , which notably does not depend on . Then we can estimate the integral by and for any fixed , which establishes property 3.   The content of these Lemmas is that the kernel has the properties that will make it well-behaved in a convolution.  "
},
{
  "id": "def-fejer-kernel",
  "level": "2",
  "url": "fourier-2.html#def-fejer-kernel",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": " The Fejér kernel is given by   "
},
{
  "id": "lemma-fejer-sine",
  "level": "2",
  "url": "fourier-2.html#lemma-fejer-sine",
  "type": "Lemma",
  "number": "6.2.2",
  "title": "",
  "body": " For any that is not an integer multiple of ,   "
},
{
  "id": "fourier-2-6",
  "level": "2",
  "url": "fourier-2.html#fourier-2-6",
  "type": "Proof",
  "number": "6.2.1",
  "title": "",
  "body": " Let and for . Then and Then, by , we can write Proceed by elbow grease. We calculate   Now, we are ready to convert these piles of into sines. First, note that and so . For the term in the numerator, notice that   Then putting the pieces together, we conclude that and so   "
},
{
  "id": "lemma-fejer-analytic",
  "level": "2",
  "url": "fourier-2.html#lemma-fejer-analytic",
  "type": "Lemma",
  "number": "6.2.3",
  "title": "",
  "body": " The function satisfies the following properties:  ;     For all with ,     "
},
{
  "id": "fourier-2-9",
  "level": "2",
  "url": "fourier-2.html#fourier-2-9",
  "type": "Proof",
  "number": "6.2.2",
  "title": "",
  "body": " Property 1 follows directly from the form of given in for any not an integer multiple of and at those points by continuity.  To see property 2, observe that Since , expanding the sum and integrating gives   The third property leverages the characterization of in terms of sine functions. Suppose . If or , then By , which notably does not depend on . Then we can estimate the integral by and for any fixed , which establishes property 3.  "
},
{
  "id": "fourier-3",
  "level": "1",
  "url": "fourier-3.html",
  "type": "Section",
  "number": "6.3",
  "title": "Convergence of classical Fourier series",
  "body": " Convergence of classical Fourier series  "
},
{
  "id": "fourier-4",
  "level": "1",
  "url": "fourier-4.html",
  "type": "Section",
  "number": "6.4",
  "title": "Exercises",
  "body": " Exercises    "
},
{
  "id": "dual-1",
  "level": "1",
  "url": "dual-1.html",
  "type": "Section",
  "number": "7.1",
  "title": "Linear functionals",
  "body": " Linear functionals  Let us consider an analogy with linear algebra. The space can be acted on by a linear transformation, which can be realized as multiplication by a matrix that represents the linear transformation. Such an can be any size that is compatible with matix mutiplication. If we choose a transformation that is represented by a vector of size , then we've created a function on that takes . The space of all such functions is itself -dimensional (since each function arises from a vector in ). Multiplication of two vectors that results in a scalar output already has a form that we know - namely, we can write any such function in terms of its representing vector by This is a simple case of a powerful theorem called the Riesz representation theorem. A function on of the form is called a linear functional . One of the core ideas of functional analysis is that we can often move phenomena and relationships that exist among the elements of a vector space into dual relationships among elements of the space of linear functionals.  While it easy to write down the general linear functional in finite dimensions, in infinite dimensions the problem is significantly harder. One useful restriction is to consider just the family of continuous linear functionals (we are doing analysis, after all!). One reason to study Hilbert spaces is that the inner product geometry allows us to write down then general linear functional (in precisely the same form as the finite dimensional case - for some vector ). In Banach spaces, we do not have an inner product and it is quite a bit trickier. This means that in Hilbert spaces, duality works much like it does in finite dimensions. We will now make these notions formal.   A linear functional on a vector space over a field is a mapping satisfying for all and .   on  Define by where .   on  Define by where . The space is the space of bounded sequences. The space is the space of sequences so that is finite. Combining these facts gives that is absolutely convergent, which ensures that is a well-defined function.   on  Define by for a function , where is a function of bounded variation on . (This is called a Stieltjes integral, and used widely in probability theory. It generalizes the Riemann integral - one recovers the Riemann integral by choosing .)   on  Let be a Hilbert space and . Define by   Show that each of the above is a linear functional.  The examples above are also continuous. There is a convenient theorem for checking this fact.   Let be a linear functional on a normed space . The following are equivalent:  is continuous;  is continuous at 0;     The set is called the unit ball of . So a functional is continuous if and only if it is bounded on the unit ball.   (1) implies (2) is obvious.  Suppose that (2) holds. Then given , there exists so that implies that . Now we will use the fact that is linear to show that is bounded. For any with , , which means that . Then linearity gives that on the unit ball of , and so (3) holds.  Now suppose that (3) holds. Denote the finite supremum of on the unit ball of by . For any distinct vectors , the vector is a unit vector. Then by (iii), Because is linear, this means that and so is continuous.   A discontinous linear functional Define a linear functional on , the space of continuously differentiable functions on , by Show that is discontinuous with respect to the norm .  Just as in the finite-dimensional case, the set of continuous linear functionals is a space in its own right, as long as the underlying space is at least a normed space. Surprisingly, even if the underlying space is not complete (i.e., not a Banach space), the set of functionals will be.   The set of all continuous linear functionals on a normed space is a Banach space with respect to pointwise algebraic operations and under the norm    First, it is straightforward to show that is a vector space over the same field as . By , for all , and one can readily verify that as defined above is a norm (as in ).  We will now show that is complete. Let denote a Cauchy sequence of linear functionals so that as . Choose . Then the sequence as . As this is a sequence of scalars, it must converge. Denote the limit of this sequence by . Then the map so pointwise defined is a linear functional (by the properties of limits and the fact that the are linear functionals). It remains to show that and that with respect to .  Let and choose some so that implies that (as is Cauchy). Then for any with , and for all , we have Taking , we get that, for all and , To complete the proof, note that since and are bounded on the closed unit ball of , so must be , which by means that is continuous and so . On the other hand, implies that for , and so in . Thus is complete (and hence a Banach space of continuous linear functionals).   The space is often referred to as the dual space of .  Analysis is built on a backbone of useful inequalities. Let us take note of a nice inequality that is an immediate consequence of the definition of the dual norm.   For any vector in a normed space and any continuous linear functional on ,     Suppose that . Then is a unit vector, and so   The dual of  We will describe the dual space of , the space of absolutely summable sequences. It turns out to be the case that one can identify with by way of a map that is an isomorphism of vector spaces and also an isometry (a mapping that preserves norms). Define a map by where is the functional defined in . It is easy to see that is linear. To see that is surjective, choose an element . We need an element such that . Let denote the th elementary basis vector in (you can think of this as a vector of 0s with a 1 in the th position), and let . Now let . (Notice that .) Since is a unit vector in , This means that is a bounded sequence, and so with Now we need to show that . Choose an , and denote the -th partial expansion of by . As a sequence, in as . Then we can evaluate and on the sequence by In the limit, this shows that for arbitrary .  The last part of the proof is to show that distances are preserved under . By , we have . On the other hand, for any choice of , and so . We conclude that , and thus that is an isometry.   "
},
{
  "id": "dual-1-2",
  "level": "2",
  "url": "dual-1.html#dual-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear functional dual "
},
{
  "id": "def-linear-functional",
  "level": "2",
  "url": "dual-1.html#def-linear-functional",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": " A linear functional on a vector space over a field is a mapping satisfying for all and .  "
},
{
  "id": "dual-1-5",
  "level": "2",
  "url": "dual-1.html#dual-1-5",
  "type": "Example",
  "number": "7.1.2",
  "title": "on <span class=\"process-math\">\\(\\C^n\\)<\/span>.",
  "body": "on  Define by where .  "
},
{
  "id": "ex-ell-1",
  "level": "2",
  "url": "dual-1.html#ex-ell-1",
  "type": "Example",
  "number": "7.1.3",
  "title": "on <span class=\"process-math\">\\(\\ell^1\\)<\/span>.",
  "body": "on  Define by where . The space is the space of bounded sequences. The space is the space of sequences so that is finite. Combining these facts gives that is absolutely convergent, which ensures that is a well-defined function.  "
},
{
  "id": "dual-1-7",
  "level": "2",
  "url": "dual-1.html#dual-1-7",
  "type": "Example",
  "number": "7.1.4",
  "title": "on <span class=\"process-math\">\\(C[0,1]\\)<\/span>.",
  "body": "on  Define by for a function , where is a function of bounded variation on . (This is called a Stieltjes integral, and used widely in probability theory. It generalizes the Riemann integral - one recovers the Riemann integral by choosing .)  "
},
{
  "id": "dual-1-8",
  "level": "2",
  "url": "dual-1.html#dual-1-8",
  "type": "Example",
  "number": "7.1.5",
  "title": "on <span class=\"process-math\">\\(\\mathcal H\\)<\/span>.",
  "body": "on  Let be a Hilbert space and . Define by  "
},
{
  "id": "dual-1-9",
  "level": "2",
  "url": "dual-1.html#dual-1-9",
  "type": "Checkpoint",
  "number": "7.1.6",
  "title": "",
  "body": "Show that each of the above is a linear functional. "
},
{
  "id": "thm-continuous-linear-functional",
  "level": "2",
  "url": "dual-1.html#thm-continuous-linear-functional",
  "type": "Theorem",
  "number": "7.1.7",
  "title": "",
  "body": " Let be a linear functional on a normed space . The following are equivalent:  is continuous;  is continuous at 0;    "
},
{
  "id": "dual-1-12",
  "level": "2",
  "url": "dual-1.html#dual-1-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit ball "
},
{
  "id": "dual-1-13",
  "level": "2",
  "url": "dual-1.html#dual-1-13",
  "type": "Proof",
  "number": "7.1.1",
  "title": "",
  "body": " (1) implies (2) is obvious.  Suppose that (2) holds. Then given , there exists so that implies that . Now we will use the fact that is linear to show that is bounded. For any with , , which means that . Then linearity gives that on the unit ball of , and so (3) holds.  Now suppose that (3) holds. Denote the finite supremum of on the unit ball of by . For any distinct vectors , the vector is a unit vector. Then by (iii), Because is linear, this means that and so is continuous.  "
},
{
  "id": "dual-1-14",
  "level": "2",
  "url": "dual-1.html#dual-1-14",
  "type": "Checkpoint",
  "number": "7.1.8",
  "title": "A discontinous linear functional.",
  "body": "A discontinous linear functional Define a linear functional on , the space of continuously differentiable functions on , by Show that is discontinuous with respect to the norm . "
},
{
  "id": "thm-dual-space-banach",
  "level": "2",
  "url": "dual-1.html#thm-dual-space-banach",
  "type": "Theorem",
  "number": "7.1.9",
  "title": "",
  "body": " The set of all continuous linear functionals on a normed space is a Banach space with respect to pointwise algebraic operations and under the norm  "
},
{
  "id": "dual-1-17",
  "level": "2",
  "url": "dual-1.html#dual-1-17",
  "type": "Proof",
  "number": "7.1.2",
  "title": "",
  "body": " First, it is straightforward to show that is a vector space over the same field as . By , for all , and one can readily verify that as defined above is a norm (as in ).  We will now show that is complete. Let denote a Cauchy sequence of linear functionals so that as . Choose . Then the sequence as . As this is a sequence of scalars, it must converge. Denote the limit of this sequence by . Then the map so pointwise defined is a linear functional (by the properties of limits and the fact that the are linear functionals). It remains to show that and that with respect to .  Let and choose some so that implies that (as is Cauchy). Then for any with , and for all , we have Taking , we get that, for all and , To complete the proof, note that since and are bounded on the closed unit ball of , so must be , which by means that is continuous and so . On the other hand, implies that for , and so in . Thus is complete (and hence a Banach space of continuous linear functionals).  "
},
{
  "id": "dual-1-18",
  "level": "2",
  "url": "dual-1.html#dual-1-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual space "
},
{
  "id": "thm-norm-split",
  "level": "2",
  "url": "dual-1.html#thm-norm-split",
  "type": "Theorem",
  "number": "7.1.10",
  "title": "",
  "body": " For any vector in a normed space and any continuous linear functional on ,   "
},
{
  "id": "dual-1-21",
  "level": "2",
  "url": "dual-1.html#dual-1-21",
  "type": "Proof",
  "number": "7.1.3",
  "title": "",
  "body": " Suppose that . Then is a unit vector, and so  "
},
{
  "id": "dual-1-22",
  "level": "2",
  "url": "dual-1.html#dual-1-22",
  "type": "Example",
  "number": "7.1.11",
  "title": "The dual of <span class=\"process-math\">\\(\\ell^1\\)<\/span>.",
  "body": "The dual of  We will describe the dual space of , the space of absolutely summable sequences. It turns out to be the case that one can identify with by way of a map that is an isomorphism of vector spaces and also an isometry (a mapping that preserves norms). Define a map by where is the functional defined in . It is easy to see that is linear. To see that is surjective, choose an element . We need an element such that . Let denote the th elementary basis vector in (you can think of this as a vector of 0s with a 1 in the th position), and let . Now let . (Notice that .) Since is a unit vector in , This means that is a bounded sequence, and so with Now we need to show that . Choose an , and denote the -th partial expansion of by . As a sequence, in as . Then we can evaluate and on the sequence by In the limit, this shows that for arbitrary .  The last part of the proof is to show that distances are preserved under . By , we have . On the other hand, for any choice of , and so . We conclude that , and thus that is an isometry.  "
},
{
  "id": "dual-2",
  "level": "1",
  "url": "dual-2.html",
  "type": "Section",
  "number": "7.2",
  "title": "The Riesz representation theorem",
  "body": "The Riesz representation theorem  In the case of Hilbert space, we recover the characterization of linear functionals as inner products against a representative vector. This powerful idea is one of the central tools of Hilbert space theory.  (Riesz-Fréchet)  Let be a Hilbert space and let be a continuous linear functional on . There exists a unique vector so that for all . Moreover, . ( is sometimes called the representative vector for .)    We should first observe that if we can find such a , guarantees that it will be unique, as for all , we would have  If is the functional that sends every vector to 0, then we can take . So suppose that is not the zero functional. In that case, the kernel of , which we denote by is a proper closed subspace of . Then by we can decompose as with . Now choose a non-zero element . We can assume that by normalizing by a scalar. Now, for any , decompose into where and so . Now, take the inner product of these vectors with . The result is since . Then we get, for all , that Now, let . Taking the inner product with , we compute This shows that the representing vector for exists.  Now, we want to show that . For any , the Cauchy-Schwarz inequality ( ) gives On the other hand, choosing the specific unit vector gives that is, . We conclude that , which completes the proof.   It is worth pointing out that the Riesz representation theorem gives an explicit map via that is both surjective and isometric. is also antilinear or conjugate linear in the sense that . Given the existence of , Hilbert spaces are in some sense their own dual spaces, in the same way that is self-dual. (That is to say, Hilbert spaces are in some strong sense the correct notion of ).  We're arrived at one of the major differences between inner product spaces and normed spaces. While the Riesz representation theorem tells us essentially everything about the continuous linear functionals on a Hilbert space, questions turn out to be significantly more complicated in the realm of Banach space. N. Young points out the following, seemingly easy question - given distinct elements in a normed space , does there exist a linear functional that separates points ; that is, can we find a functional on so that ? In Hilbert space, the answer is immediate: yes, because will do the job. In a general normed space, the answer is much more subtle and requires the central theorem of functional analysis, the Hahn-Banach theorem , which is well beyond the scope of these notes and typically introduced in a first course in functional analysis (see e.g. Conway 2007 .).  "
},
{
  "id": "dual-2-3",
  "level": "2",
  "url": "dual-2.html#dual-2-3",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "(Riesz-Fréchet).",
  "body": "(Riesz-Fréchet)  Let be a Hilbert space and let be a continuous linear functional on . There exists a unique vector so that for all . Moreover, . ( is sometimes called the representative vector for .)  "
},
{
  "id": "dual-2-4",
  "level": "2",
  "url": "dual-2.html#dual-2-4",
  "type": "Proof",
  "number": "7.2.1",
  "title": "",
  "body": " We should first observe that if we can find such a , guarantees that it will be unique, as for all , we would have  If is the functional that sends every vector to 0, then we can take . So suppose that is not the zero functional. In that case, the kernel of , which we denote by is a proper closed subspace of . Then by we can decompose as with . Now choose a non-zero element . We can assume that by normalizing by a scalar. Now, for any , decompose into where and so . Now, take the inner product of these vectors with . The result is since . Then we get, for all , that Now, let . Taking the inner product with , we compute This shows that the representing vector for exists.  Now, we want to show that . For any , the Cauchy-Schwarz inequality ( ) gives On the other hand, choosing the specific unit vector gives that is, . We conclude that , which completes the proof.  "
},
{
  "id": "dual-2-5",
  "level": "2",
  "url": "dual-2.html#dual-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antilinear conjugate linear "
},
{
  "id": "dual-3",
  "level": "1",
  "url": "dual-3.html",
  "type": "Section",
  "number": "7.3",
  "title": "Exercises",
  "body": "Exercises  to be added  "
},
{
  "id": "operators-2",
  "level": "1",
  "url": "operators-2.html",
  "type": "Section",
  "number": "8.1",
  "title": "Linear operators",
  "body": "Linear operators  Linear operators are first encountered by students in calculus and differential equations, though not always with that name. Consider the problem which can be written More generally, we learn that any linear differential equation can be written in the form for the differential operator . When we encounter problems like this the first time, we learn a group of recipes that solve the equation for various classes of , functions and sets of boundary conditions.  In another set of classes, the linear algebra sequence, we learn an extensive set of tools for analyzing the matrix problem in terms of the structure of the matrix . For example, we learn that the existence of a solution depends on the columnspace of and that the structure of the solution set depends on the nullspace (or kernel, thinking of as a function) of .  This chapter will examine the relationship between the matrix situation (in finite dimensions) and the linear operator situation (in infinite dimensions). A surprising amount of structure carries from finite to infinite dimensions.   If are vector spaces over a field , a linear operator from to is a map such that for all and .   A linear operator on is a linear operator from to . (Note: these notes largely follow the same conventions as Axler's Linear Algebra Done Right. There is a difference here - Axler restricts the term operator to only the space - that is, maps from .)  If are normed spaces, we say that a linear operator is bounded if there exists a constant such that for all . For a bounded , we define the operator norm (or just norm when there is no ambiguity) of to be the non-negative number  The kernel of a linear operator is the subspace of given by . The kernel of is denoted . The range of is the subspace of given by . The range of is denoted .  can be thought of as the largest factor by which stretches any vector, though it is a supremum, not a maximum. (What does this notion mean for a square matrix?) It also the case that   a multiplication operator  Choose a function and define the operator on by It should be immediately clear that is linear. Recalling the norms on and , for any we get Then is a bounded operator and . It turns out to be the case that (usefully) . (Can you prove it?)   an integral operator  For real numbers , let be a continuous map, and define by for . is linear (as integration is). For any , the Cauchy-Schwarz inequality gives Thus is bounded and   "
},
{
  "id": "def-linear-operator",
  "level": "2",
  "url": "operators-2.html#def-linear-operator",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": " If are vector spaces over a field , a linear operator from to is a map such that for all and .  "
},
{
  "id": "operators-2-7",
  "level": "2",
  "url": "operators-2.html#operators-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bounded operator norm "
},
{
  "id": "operators-2-8",
  "level": "2",
  "url": "operators-2.html#operators-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kernel range "
},
{
  "id": "operators-2-10",
  "level": "2",
  "url": "operators-2.html#operators-2-10",
  "type": "Example",
  "number": "8.1.2",
  "title": "a multiplication operator.",
  "body": "a multiplication operator  Choose a function and define the operator on by It should be immediately clear that is linear. Recalling the norms on and , for any we get Then is a bounded operator and . It turns out to be the case that (usefully) . (Can you prove it?)  "
},
{
  "id": "operators-2-11",
  "level": "2",
  "url": "operators-2.html#operators-2-11",
  "type": "Example",
  "number": "8.1.3",
  "title": "an integral operator.",
  "body": "an integral operator  For real numbers , let be a continuous map, and define by for . is linear (as integration is). For any , the Cauchy-Schwarz inequality gives Thus is bounded and  "
},
{
  "id": "hilbert-11",
  "level": "1",
  "url": "hilbert-11.html",
  "type": "Chapter",
  "number": "9",
  "title": "Appendix: Results from analysis",
  "body": "Appendix: Results from analysis  Heine-Borel  A closed and bounded set in or is compact.    Let be metric spaces. Let . If is continuous, then compact implies that is compact.    Suppose that is a non-empty compact set in a metric space and that is continuous. Then attains its infimum and supremum on - that is, has both a minimum and maximum on .   "
},
{
  "id": "thm-heine-borel",
  "level": "2",
  "url": "hilbert-11.html#thm-heine-borel",
  "type": "Theorem",
  "number": "9.0.1",
  "title": "Heine-Borel.",
  "body": "Heine-Borel  A closed and bounded set in or is compact.  "
},
{
  "id": "thm-cont-comp",
  "level": "2",
  "url": "hilbert-11.html#thm-cont-comp",
  "type": "Theorem",
  "number": "9.0.2",
  "title": "",
  "body": " Let be metric spaces. Let . If is continuous, then compact implies that is compact.  "
},
{
  "id": "thm-comp-inf",
  "level": "2",
  "url": "hilbert-11.html#thm-comp-inf",
  "type": "Theorem",
  "number": "9.0.3",
  "title": "",
  "body": " Suppose that is a non-empty compact set in a metric space and that is continuous. Then attains its infimum and supremum on - that is, has both a minimum and maximum on .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
