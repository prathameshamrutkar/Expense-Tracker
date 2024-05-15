import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "./Layouts";
import { Grid } from "@material-ui/core";
import Chart from "./Chart";
import { useNavigate, useLocation } from "react-router-dom";
import useTransactions from "../../useTransactions"; //addition
import { ExpenseTrackerContext } from "../../context/context"; //addition
import "./style.css"
import jsPDF from "jspdf"
import "jspdf-autotable";
import Navbar from "../Navbar/navbar";


function Dashboard() {
  // const location = useLocation();
  // const isVisible = location.state?.isVisible || false;

	const { balance } = useContext(ExpenseTrackerContext); //addition
	const { total } = useTransactions("Income"); //addition
	const { total1 } = useTransactions("Expense"); //addition

  const { transactions } = useContext(ExpenseTrackerContext);

	const navigate = useNavigate();
	const home = () => {
		navigate("/home");
	};
 
  const json = transactions;

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const colstyle = {
    width: "30%"
  };
  const tableStyle = {
    width: "100%"
  };
  
  const print = () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const columns = [
      "Type",
      "Category",
      "Amount",
      "Date",
    ];
    var rows = [];
  
    for (let i = 0; i < json.length; i++) {
      /*for (var key in json[i]) {
        var temp = [key, json[i][key]];
        rows.push(temp);
      }*/
      var temp = [
        json[i].type,
        json[i].category,
        json[i].amount,
        json[i].date,
      ];
      rows.push(temp);
    }

    pdf.text(50,240,"Income : ".concat(total))
    pdf.text(200,240,"Expense : ".concat(total1))
    pdf.text(400,240,"Balance : ".concat(balance))
    pdf.text(235, 40, "Income-Expense Table");
    pdf.autoTable(columns, rows, {
      startY: 65,
      theme: "grid",
      styles: {
        font: "courier",
        halign: "center",
        cellPadding: 3.5,
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        textColor: [0, 0, 0]
      },
      headStyles: {
        textColor: [0, 0, 0],
        fontStyle: "normal",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fillColor: [166, 204, 247]
      },
      alternateRowStyles: {
        fillColor: [212, 212, 212],
        textColor: [0, 0, 0],
        lineWidth: 0.5,
        lineColor: [0, 0, 0]
      },
      rowStyles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0]
      },
      tableLineColor: [0, 0, 0]
    });
    console.log(pdf.output("datauristring"));
    pdf.save("income-expense");
  };

	return (
		<div className="dashboard">
			<Navbar print={print} />

			<DashboardStyled>
				<InnerLayout>
					<div className="stats-con">
						<div className="chart-con">
              <Chart />
							
							<div className="amount-con">
								<div className="income">
									<h2>Total Income</h2>
									<p>
										₹{total}
										{/* addition */}
									</p>
								</div>
								<div className="expense">
									<h2>Total Expense</h2>
									<p>
										₹{total1}
										{/* addition */}
									</p>
								</div>
								<div className="balance">
									<h2>Total Balance</h2>
									<p>
										₹{balance}
										{/* addition */}
									</p>
								</div>
							</div>
						</div>
					</div>
				</InnerLayout>
			</DashboardStyled>
		</div>
	);
}

const DashboardStyled = styled.div`x;
	.home1{
    background-color: rgb(31, 36, 36);
    margin: 2px 35px; padding: 2px 12px; color:azure;
    border: 2px solid #eeeeee; border-radius: 10px;
    font-size: 15px; cursor: pointer;
    font-family: 'Baloo Bhai 2', cursive;
	}

  .print{
   margin-left:50px;
	}
	
	button:hover{ background-color: #3c3b3f; }

  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    width: 1000px;
  }

    .chart-con {
      grid-column: 1 / 4;
      height: 450px;
      margin-right: -280px;
      // margin-top: -180px;
	}
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        margin-top: 1rem;
	  }
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 0.5rem;
		  text-align: center;

          p {
            font-size: 1.5rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          // p {
          //   color: var(--color-green);
          //   opacity: 0.7;
          //   font-size: 1.5rem;
          // }
        }
      }
    }
  }
`;

export default Dashboard;